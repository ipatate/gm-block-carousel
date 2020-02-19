<?php

/**
 * Plugin Name: Block GM Carousel
 * Description: Display carousel image
 * Version:     0.1.0
 * Author:      Faramaz Pat <info@goodmotion.fr>
 * License:     MIT License
 * Text Domain: gm-carousel
 **/

defined('ABSPATH') || exit;
/**
 * Load all translations for our plugin from the MO file.
 */
function gm_carousel_load_textdomain()
{
    load_plugin_textdomain('gm-carousel', false, basename(__DIR__) . '/languages');
}

function init_carousel_block()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    // script for admin
    wp_register_script(
        'gm-carousel-js',
        plugins_url('dist/main.js', __FILE__),
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

    // style for admin editor
    wp_register_style(
        'gm-carousel-editor-css',
        plugins_url('dist/editor.css', __FILE__),
        [],
        null
    );

    // style for front
    wp_register_style(
        'gm-carousel-public-css',
        plugins_url('dist/styles.css', __FILE__),
        [],
        null
    );

    // create block
    register_block_type(
        'gm/carousel',
        [
            'editor_script' => 'gm-carousel-js',
            'editor_style'  => 'gm-carousel-editor-css',
            'style'  => 'gm-carousel-public-css',
        ]
    );

    if (function_exists('wp_set_script_translations')) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations('gm/carousel', 'gm-carousel');
    }
}


// add js script on front
function gm_carousel_frontend_scripts()
{
    if (has_block('gm/carousel')) {
        wp_enqueue_script(
            'gm-carousel-front',
            plugins_url('dist/gm-carousel.js', __FILE__),
            null,
            filemtime(plugin_dir_path(__FILE__) . 'dist/gm-carousel.js')
        );
    }
}

// add script in front if block exist
add_action('wp_enqueue_scripts', 'gm_carousel_frontend_scripts');

// init block
add_action('init', 'gm_carousel_load_textdomain');
add_action('init', 'init_carousel_block');
