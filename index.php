<?php

/**
 * Plugin Name: Block GM Carousel
 * Description: Display carousel image
 * Version:     0.1.0
 * Author:      Faramaz Pat <info@goodmotion.fr>
 * License:     MIT License
 * Domain Path: /languages
 * Text Domain: gm-carousel
 **/

namespace Goodmotion\Gutenberg\Blocks\Carousel;


defined('ABSPATH') || exit;

/** define env */
function isDevEnv()
{
    // return false;
    if (defined('WP_DEBUG') && WP_DEBUG === true) {
        return true;
    }
    return false;
}
/**
 * Load all translations for our plugin from the MO file.
 */
function load_textdomain()
{
    load_plugin_textdomain('gm-carousel', false, plugin_dir_path(__FILE__) . 'languages');
}

/**
 * init the block
 */
function register_block()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    // script for admin
    wp_register_script(
        'gm-carousel-editor',
        !isDevEnv() ? plugins_url('dist/main.js', __FILE__) :
            'http://localhost:8080/main.js',
        [
            'wp-element',
            'wp-block-editor',
            // 'wp-editor',
            // 'wp-compose',
            // 'wp-data',
            'wp-components',
            'wp-i18n',
            'wp-blocks',
        ],
        '',
        null,
        true
    );

    if (!isDevEnv()) {
        // style for admin editor
        wp_register_style(
            'gm-carousel-editor',
            !isDevEnv() ? plugins_url('dist/editor.css', __FILE__) :
                'http://localhost:8080/editor.css',
            [],
            null
        );
    }

    if (!isDevEnv()) {
        // style for front
        wp_register_style(
            'gm-carousel',
            !isDevEnv() ? plugins_url('dist/styles.css', __FILE__) :
                'http://localhost:8080/styles.css',
            [],
            null
        );
    }

    // create block
    register_block_type(
        'gm/carousel',
        [
            'editor_script' => 'gm-carousel-editor',
            'editor_style'  => !isDevEnv() ? 'gm-carousel-editor' : null,
            'style'  => !isDevEnv() ? 'gm-carousel' : null,
        ]
    );
}


/**
 * add js script on front
 */
function frontend_scripts()
{
    if (has_block('gm/carousel')) {
        // for externalize siema script
        // if (isDevEnv() === false) {
        // wp_enqueue_script(
        //     'gm-carousel-siema',
        //     plugins_url('dist/gm-carousel-siema.js', __FILE__),
        //     filemtime(plugin_dir_path(__FILE__) . 'dist/gm-carousel-siema.js')
        // );
        // }
        wp_enqueue_script(
            'gm-carousel-front',
            !isDevEnv() ? plugins_url('dist/gm-carousel.js', __FILE__) :
                'http://localhost:8080/gm-carousel.js',
            null,
            !isDevEnv() ? filemtime(plugin_dir_path(__FILE__) . 'dist/gm-carousel.js') : null
        );
    }
}

/**
 * load translations
 */
function set_script_translations()
{
    wp_set_script_translations('gm-carousel-editor', 'gm-carousel', plugin_dir_path(__FILE__) . 'languages');
}

// add script in front if block exist
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\frontend_scripts');

// init block
add_action('init', __NAMESPACE__ . '\register_block');
add_action('init', __NAMESPACE__ . '\load_textdomain');
add_action('init', __NAMESPACE__ . '\set_script_translations');
