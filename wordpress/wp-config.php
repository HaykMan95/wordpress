<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'x]G&vTe !!h2%X*~f%RHq7Itb%. 5O]@v>47*VUA|CT_XK3$<b1>J[&&T>p0r&Lg');
define('SECURE_AUTH_KEY',  'gk!/suD]NDqff#pD(8> i<gdU;a-#`T%!chYPXB>Bk&a;**]_l/&>BqOQF(DrAp;');
define('LOGGED_IN_KEY',    'ox*]!8).*j&KkCa9@>hjO[+~Z^R,L`t. r$(=h<I&M<CW{P&twf%W>6[GMHeWFuA');
define('NONCE_KEY',        'm.?e6P6|V[D2&J5-mEMYZ@KjX_(]D|PXZ2r],,X9~PJ,>ylaJ4{9Qb!hGK!TkpG(');
define('AUTH_SALT',        'UwLK*<kWe*[g98q;M >V)+H|-D1zth9p#99)|:dzI%H|X=K~wvq;X?K_]*.XY(^X');
define('SECURE_AUTH_SALT', 'TWbJLF|hgjS9<W0KO7.8!S$ro6qQ&Nte|RJ;o|t UvM=AB/ z>6n|,w!Rs].;0F-');
define('LOGGED_IN_SALT',   '2Tv1PYR<]9?<A5F%t0IITag_J,kfvDA:F{Nf:8F@|kVPdnb-1%^hx*mblZzr*da;');
define('NONCE_SALT',       'ly_i#$*c&_irZr4m*t!#GI#&,:4MWQ!],Oor=3usq<}v@>J6M#XJ&K-=QP`MqpBZ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
