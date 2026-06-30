<?php
/**
 * WordPress基础配置文件。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以不使用网站，您需要手动复制这个文件，
 * 并重命名为“wp-config.php”，然后填入相关信息。
 *
 * 本文件包含以下配置选项：
 *
 * * MySQL设置
 * * 密钥
 * * 数据库表名前缀
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define( 'DB_NAME', 'breoedb' );

/** MySQL数据库用户名 */
define( 'DB_USER', 'breoe' );

/** MySQL数据库密码 */
define( 'DB_PASSWORD', '681127' );

/** MySQL主机 */
define( 'DB_HOST', 'localhost' );

/** 创建数据表时默认的文字编码 */
define( 'DB_CHARSET', 'utf8mb4' );

/** 数据库整理类型。如不确定请勿更改 */
define( 'DB_COLLATE', '' );

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'dNV7Q;gUo0Ql *4qn&s]r-5EjxYkG1}TQq@4D5!*t|Z1D97P6x8pqUI)#NmG@)8f' );
define( 'SECURE_AUTH_KEY',  'dBp1 `->a >C7K3_iGyAh&S{rsVFWu1g~sFwRa^MH~Wh>7k!PD:! ^Ut4H$4Gl+:' );
define( 'LOGGED_IN_KEY',    'EqxPI-S9B/2nA+}$DJ)WT1<CJ9Ngm,9liS(S2E:crQ;%LlCe)4KFu_%{tA@o.~_R' );
define( 'NONCE_KEY',        '+>+xlD@>%.S#{KI Rpj6x0,_wNTSb~ROgqg)Zz ]uI 9o,c mk{M8PAr7HZ~xp?)' );
define( 'AUTH_SALT',        '(*wR_f;M#g5}?~6k^AVS+,GF(U;ihn@ jN1_<k4uE<86!R (4v<c<^#|Zi8-TbKc' );
define( 'SECURE_AUTH_SALT', '5Cr96,NZGkE!2l)0Teadr|[oN<})PbG(<.ElUcYQWgJU9^&<X<# _gwYgF<V+s|f' );
define( 'LOGGED_IN_SALT',   '}C0aGMJ$nx$U{S/;VhQunckF>tt/nc+=]JP-Elz,FgV (Z3=(1wl.0y >GeSt:nX' );
define( 'NONCE_SALT',       '1?}IX-b8R)#W1^<hnd``{9JS/H2s%;0]l$D?QF%{e% feM^OKM#CyvpSLS|8!i{r' );

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix = 'wpb_';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 *
 * 要获取其他能用于调试的信息，请访问Codex。
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** 设置WordPress变量和包含文件。 */
require_once( ABSPATH . 'wp-settings.php' );

/**解决更新问题 */
define('FS_METHOD', "direct");