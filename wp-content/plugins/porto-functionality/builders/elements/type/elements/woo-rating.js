/**
 * Post Type Builder - WooCommerce Rating
 * 
 * @since 2.3.0
 */
import PortoStyleOptionsControl, {portoGenerateStyleOptionsCSS} from '../../../../shortcodes/assets/blocks/controls/style-options';
import PortoTypographyControl, {portoGenerateTypographyCSS} from '../../../../shortcodes/assets/blocks/controls/typography';
import {portoAddHelperClasses} from '../../../../shortcodes/assets/blocks/controls/editor-extra-classes';

( function ( wpI18n, wpBlocks, wpBlockEditor, wpComponents ) {
    "use strict";

    const __ = wpI18n.__,
        registerBlockType = wpBlocks.registerBlockType,
        InspectorControls = wpBlockEditor.InspectorControls,
        SelectControl = wpComponents.SelectControl,
        TextControl = wpComponents.TextControl,
        RangeControl = wpComponents.RangeControl,
        ToggleControl = wpComponents.ToggleControl,
        Disabled = wpComponents.Disabled,
        PanelBody = wpComponents.PanelBody,
        ServerSideRender = wp.serverSideRender,
        useEffect = wp.element.useEffect;

    const PortoTBWooRating = function ( { attributes, setAttributes, name, clientId } ) {

        useEffect(
            () => {
                if ( ! attributes.el_class || -1 !== porto_tb_ids.indexOf( attributes.el_class ) ) { // new or just cloned
                    const new_cls = 'porto-tb-woo-rating-' + Math.ceil( Math.random() * 10000 );
                    attributes.el_class = new_cls;
                    setAttributes( { el_class: new_cls } );
                }
                porto_tb_ids.push( attributes.el_class );

                return () => {
                    const arr_index = porto_tb_ids.indexOf( attributes.el_class );
                    if ( -1 !== arr_index ) {
                        porto_tb_ids.splice( arr_index, 1 );
                    }
                }
            },
            [],
        );

        let attrs = { el_class: attributes.el_class, className: attributes.className };
        if ( porto_content_type ) {
            attrs.content_type = porto_content_type;
            if ( porto_content_type_value ) {
                attrs.content_type_value = porto_content_type_value;
            }
        }

        let internalStyle = '',
            font_settings = Object.assign( {}, attributes.font_settings );

        const style_options = Object.assign( {}, attributes.style_options );
        let selectorCls = 'tb-woo-rating';
        if ( attributes.el_class ) {
            selectorCls = attributes.el_class;
        }

        if ( attributes.alignment || attributes.font_settings ) {
            let fontAtts = attributes.font_settings;
            fontAtts.alignment = attributes.alignment;

            internalStyle += portoGenerateTypographyCSS( fontAtts, selectorCls + ' .star-rating', 'woo-rating' );
        }

        // add helper classes to parent block element
        if ( attributes.className ) {
            portoAddHelperClasses( attributes.className, clientId );
        }

        return (
            <>
                <InspectorControls key="inspector">
                    <PanelBody title={ __( 'Font Settings', 'porto-functionality' ) } initialOpen={ true }>
                        <SelectControl
                            label={ __( 'Alignment', 'porto-functionality' ) }
                            value={ attributes.alignment }
                            help={ __( 'This works only when using width property in Style Options together.', 'porto-functionality' ) }
                            options={ [ { 'label': __( 'Inherit', 'porto-functionality' ), 'value': '' }, { 'label': __( 'Left', 'porto-functionality' ), 'value': 'left' }, { 'label': __( 'Center', 'porto-functionality' ), 'value': 'center' }, { 'label': __( 'Right', 'porto-functionality' ), 'value': 'right' }, { 'label': __( 'Justify', 'porto-functionality' ), 'value': 'justify' } ] }
                            onChange={ ( value ) => { setAttributes( { alignment: value } ); } }
                        />
                        <PortoTypographyControl
                            label={ __( 'Typography', 'porto-functionality' ) }
                            value={ font_settings }
                            options={ { fontFamily: false, lineHeight: false, textTransform: false } }
                            onChange={ ( value ) => {
                                setAttributes( { font_settings: value } );
                            } }
                        />
                    </PanelBody>
                    <PortoStyleOptionsControl
                        label={ __( 'Style Options', 'porto-functionality' ) }
                        value={ style_options }
                        options={ {} }
                        onChange={ ( value ) => { setAttributes( { style_options: value } ); } }
                    />
                </InspectorControls>
                <Disabled>
                    <style>
                        { internalStyle }
                        { portoGenerateStyleOptionsCSS( style_options, selectorCls ) }
                    </style>
                    <ServerSideRender
                        block={ name }
                        attributes={ attrs }
                    />
                </Disabled>
            </>
        )
    }
    registerBlockType( 'porto-tb/porto-woo-rating', {
        title: __( 'Woo Rating', 'porto-functionality' ),
        icon: 'porto',
        category: 'porto-tb',
        keywords: [ 'type builder', 'mini', 'card', 'post', 'stars', 'feedback' ],
        attributes: {
            content_type: {
                type: 'string',
            },
            content_type_value: {
                type: 'string',
            },
            alignment: {
                type: 'string',
            },
            font_settings: {
                type: 'object',
                default: {},
            },
            style_options: {
                type: 'object',
            },
            el_class: {
                type: 'string',
            }
        },
        edit: PortoTBWooRating,
        save: function () {
            return null;
        }
    } );
} )( wp.i18n, wp.blocks, wp.blockEditor, wp.components );