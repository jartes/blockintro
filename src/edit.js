import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
        <div { ...useBlockProps() }>
            <TextControl
                label={ __( 'Message to add', 'gutenpride' ) }
                value={ attributes.message }
                onChange={ ( val ) => setAttributes( { message: val } ) }
            />
        </div>
    );
}
