/**
 * NEWCONCRET — scripts/set-admin-password.js
 * Genera/actualiza la contraseña del panel admin en el archivo .env (local,
 * gitignored). Guarda un hash scrypt (nunca la contraseña en texto plano) y,
 * si no existe, un SESSION_SECRET aleatorio para firmar las sesiones.
 *
 *   node scripts/set-admin-password.js "miContraseñaSegura"
 *   npm run admin:password -- "miContraseñaSegura"
 */

const fs     = require('fs');
const path   = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const pass = process.argv[2];

if (!pass || pass.length < 8) {
  console.error('✗ Uso: node scripts/set-admin-password.js "<contraseña de al menos 8 caracteres>"');
  process.exit(1);
}

const salt = crypto.randomBytes(16).toString('hex');
const hash = crypto.scryptSync(pass, salt, 64).toString('hex');

const envPath = path.join(ROOT, '.env');
let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

function setVar(text, key, value) {
  const re = new RegExp(`^${key}=.*$`, 'm');
  const line = `${key}=${value}`;
  if (re.test(text)) return text.replace(re, line);
  return (text && !text.endsWith('\n') ? text + '\n' : text) + line + '\n';
}

env = setVar(env, 'ADMIN_PASSWORD_HASH', `${salt}:${hash}`);
if (!/^SESSION_SECRET=/m.test(env)) {
  env = setVar(env, 'SESSION_SECRET', crypto.randomBytes(32).toString('hex'));
}
if (!/^ADMIN_USER=/m.test(env)) {
  env = setVar(env, 'ADMIN_USER', 'admin');
}

fs.writeFileSync(envPath, env, 'utf8');
console.log('✓ Contraseña del admin configurada en .env (no se commitea ni se deploya).');
console.log('  Reiniciá el servidor (node server.js) para aplicar los cambios.');
