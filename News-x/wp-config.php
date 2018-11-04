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
define('DB_NAME', 'wp-newsx');

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
define('AUTH_KEY',         'Ip`9Bx[h72rzUBsl-`Ddx+1)_Rg!zUs^W>5`I:6&l7Pa^(VYz*D)~<~]tP8HS`^j');
define('SECURE_AUTH_KEY',  'qwB;Zx-CMCI(Okn%,Ajt}$B{V,O/HO+0k(l-whqW:{&O/Zb- /NOYVA<3u#(VWw0');
define('LOGGED_IN_KEY',    'e9`H}kRqX4PU&R-3IX@vH:nOLp#GY8$9yAP-Xdyyg`2|S#P2uTPnX?_=S#; 9IuO');
define('NONCE_KEY',        'G.Y]`rV`0,;:kph8i,pOw~.7 ?=1BxNuXkDt+&!La|xmY~ 4MO^f6(_E5xdR%EQ5');
define('AUTH_SALT',        '&Fy,GtA`K>E>H]~&,e/}_7RWi=>Sh2yDzu)K__8~@Yrwzs[[2~7)x-w&>9Ya&u^I');
define('SECURE_AUTH_SALT', '$|nQWwt$2Ra[!o8tUScWfK<7C}USZGWo$3Q)E$yM%9?VgaAjyQ}[Q7[&CEAIlr i');
define('LOGGED_IN_SALT',   '>G1JOKCl2oh.%+VzEF(9KeetZp@a+F/z1zLb)3SjKmU#!%Em>tC{qjeIJI0.]U|:');
define('NONCE_SALT',       ' +j__3<CVxr UtKKQ/6&rR&?#x8hNZCiQ{^OU:!Wp3XNm+4B-wtO$vJQd?&-}{dH');

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
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
