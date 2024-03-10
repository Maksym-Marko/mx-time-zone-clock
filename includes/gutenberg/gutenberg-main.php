<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

/**
 * The MXDFMTZCGutenberg class.
 *
 * Here you can register you own
 * Gutenberg blocks.
 */
class MXDFMTZCGutenberg
{

    public function registerBlocks()
    {

        // Server side rendering.
        add_action('init', [$this, 'serverSideRendering']);
    }

    // Server side rendering.
    public function serverSideRendering()
    {

        $asset_file = include('build/mx-timezone-clock/index.asset.php');

        wp_register_script(
            'mx_server_side_rendering_script',
            MXMTZC_PLUGIN_URL . 'includes/gutenberg/build/mx-timezone-clock/index.js',
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );

        wp_localize_script('mx_server_side_rendering_script', 'mxdfmtzc_localizer', [
            'image_folder' => MXMTZC_PLUGIN_URL . 'includes/admin/assets/img/'
        ]);

        register_block_type(
            __DIR__ . '/build/mx-timezone-clock',
            [
                'api_version'       => 2,
                'category'          => 'widgets',
                'attributes'        => [
                    'time_zone'   => [
                        'type' => 'string',
                        'default' => 'Europe/London'
                    ],
                    'city_name'   => [
                        'type' => 'string',
                        'default' => 'London'
                    ],
                    'time_format'   => [
                        'type' => 'number',
                        'default' => 24 // 12
                    ],
                    'digital_clock'   => [
                        'type' => 'string',
                        'default' => 'false'
                    ],
                    'lang'   => [
                        'type' => 'string',
                        'default' => 'en'
                    ],
                    'lang_for_date'   => [
                        'type' => 'string',
                        'default' => 'en'
                    ],
                    'show_days'   => [
                        'type' => 'string',
                        'default' => 'false'
                    ],
                    'clock_font_size'   => [
                        'type' => 'number',
                        'default' => 14
                    ],
                    'arrow_type'   => [
                        'type' => 'string',
                        'default' => 'classical' // modern
                    ],
                    'super_simple'   => [
                        'type' => 'string',
                        'default' => 'false'
                    ],
                    'arrows_color'   => [
                        'type' => 'string',
                        'default' => '#333333'
                    ],
                    'clock_type'   => [
                        'type' => 'string',
                        'default' => 'clock-face2.png'
                    ],
                    'clock_upload'   => [
                        'type' => 'string',
                        'default' => 'false'
                    ],
                    'mediaId'  => [
                        'type' => 'string',
                        'default' => NULL
                    ]
                ],
                'editor_script' => 'mx_server_side_rendering_script',
                'render_callback'   => [$this, 'server_side_rendering_dynamic_render_callback'],
                'skip_inner_blocks' => true,
            ]
        );
    }

    public function server_side_rendering_dynamic_render_callback($block_attributes, $content)
    {

        ob_start();

        $data = [
            'time_zone' => esc_attr($block_attributes['time_zone']),
            'city_name' => html_entity_decode(esc_attr($block_attributes['city_name'])),
            'time_format' => intval($block_attributes['time_format']),
            'digital_clock' => esc_attr($block_attributes['digital_clock']),
            'lang' => esc_attr($block_attributes['lang']),
            'lang_for_date' => esc_attr($block_attributes['lang_for_date']),
            'show_days' => esc_attr($block_attributes['show_days']),
            'clock_font_size' => intval($block_attributes['clock_font_size']),
            'arrow_type' => esc_attr($block_attributes['arrow_type']),
            'super_simple' => esc_attr($block_attributes['super_simple']),
            'arrows_color' => esc_attr($block_attributes['arrows_color']),
            'clock_type' => esc_attr($block_attributes['clock_type']),
            'clock_upload' => esc_attr($block_attributes['clock_upload']),
            'mediaId' => esc_attr($block_attributes['mediaId'])
        ];

        mxmtzc_require_view_file_frontend('clock-render.php', $data);

        return ob_get_clean();
    }
}

/**
 * Initialization.
 */
$gutenbergClassInstance = new MXDFMTZCGutenberg();

/**
 * Register custom Gutenberg blocks.
 */
$gutenbergClassInstance->registerBlocks();
