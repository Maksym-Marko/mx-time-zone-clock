import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ColorPicker, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import './editor.scss';
import metadata from './block.json';
import timezones from 'timezones-list';
import ISO6391 from 'iso-639-1';

export default function Edit({ attributes, setAttributes }) {

	const blockProps = useBlockProps();

	// time zones
	const formattedTimezones = [];

	const _timezones = timezones.sort((a, b) => {
		if ( a.label < b.label ){
			return -1;
		  }
		  if ( a.label > b.label ){
			return 1;
		  }
		  return 0;
	}); 
	
	_timezones.forEach(element => {
		let obj = {
			label: element.label,
			value: element.tzCode
		}
		formattedTimezones.push(obj);
	});

	// locales
	const formattedLocales = [];

	const locales = ISO6391.getAllCodes();
	
	locales.forEach(element => {
		let obj = {
			label: element,
			value: element
		}
		formattedLocales.push(obj);
	});

	// font sizes
	let formattedFontSizes = []

	for(let size=0; size<=100; size++) {
		let obj = {
			label: size,
			value: size
		}
		formattedFontSizes.push(obj);
	}

	// image names
	let imageNames = [];
	for(let key=1; key<=30; key++) {
		const img = `clock-face${key}.png`;
		imageNames.push(img);
	}

	// image upload
	const ALLOWED_MEDIA_TYPES = ['image']

	const imageData = useSelect((select) => {
		if (attributes.mediaId) {
			return select('core').getEntityRecord('postType', 'attachment', attributes.mediaId);

		} else {
			return false
		}
	}, [attributes]);

	useEffect(() => {
		if (imageData?.media_details) {
			setAttributes({
				clock_upload: imageData.media_details.sizes.full.source_url
			})
		}
	}, [imageData])

	return [
		<InspectorControls key="mx-settings">

			<Panel header="Clock Properties">
				
				<PanelBody title={__('Time Zone', 'mxmtzc-domain')} initialOpen={true}>
					
					<PanelRow>
						<SelectControl
							onChange={(time_zone) => setAttributes({ time_zone })}
							__nextHasNoMarginBottom
							value={attributes.time_zone}
							options={formattedTimezones}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('City Name', 'mxmtzc-domain')} initialOpen={true}>
					
					<PanelRow>
						<TextControl
							value={attributes.city_name}
							onChange={(city_name) => setAttributes({ city_name })}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Time Format', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(time_format) => setAttributes({ time_format })}
							__nextHasNoMarginBottom
							value={attributes.time_format}
							options={[
								{
									label: 24,
									value: 24
								},
								{
									label: 12,
									value: 12
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Digital Clock', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(digital_clock) => setAttributes({ digital_clock })}
							__nextHasNoMarginBottom
							value={attributes.digital_clock}
							options={[
								{
									label: __('Yes', 'mxmtzc-domain'),
									value: 'true'
								},
								{
									label: __('No', 'mxmtzc-domain'),
									value: 'false'
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Clock Language', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(lang) => setAttributes({ lang })}
							__nextHasNoMarginBottom
							value={attributes.lang}
							options={formattedLocales}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Date Language', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(lang_for_date) => setAttributes({ lang_for_date })}
							__nextHasNoMarginBottom
							value={attributes.lang_for_date}
							options={formattedLocales}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Show Dates', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(show_days) => setAttributes({ show_days })}
							__nextHasNoMarginBottom
							value={attributes.show_days}
							options={[
								{
									label: 'Yes',
									value: 'true'
								},
								{
									label: 'No',
									value: 'false'
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Clock Font Size', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(clock_font_size) => setAttributes({ clock_font_size })}
							__nextHasNoMarginBottom
							value={attributes.clock_font_size}
							options={formattedFontSizes}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Show Seconds', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(show_seconds) => setAttributes({ show_seconds })}
							__nextHasNoMarginBottom
							value={attributes.show_seconds}
							options={[
								{
									label: 'Yes',
									value: 'true'
								},
								{
									label: 'No',
									value: 'false'
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Arrow Type', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(arrow_type) => setAttributes({ arrow_type })}
							__nextHasNoMarginBottom
							value={attributes.arrow_type}
							options={[
								{
									label: 'Classical',
									value: 'classical'
								},
								{
									label: 'Modern',
									value: 'modern'
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Super Simple', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(super_simple) => setAttributes({ super_simple })}
							__nextHasNoMarginBottom
							value={attributes.super_simple}
							options={[
								{
									label: 'Yes',
									value: 'true'
								},
								{
									label: 'No',
									value: 'false'
								}
							]}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody title={__('Arrows Color', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						
						<ColorPicker 
							onChange={(arrows_color) => setAttributes({ arrows_color })}
							defaultValue={attributes.arrows_color}
						/>

					</PanelRow>

				</PanelBody>

				{typeof mxdfmtzc_localizer === 'object' && mxdfmtzc_localizer.hasOwnProperty('image_folder') ? (
					<PanelBody title={__('Clock Type', 'mxmtzc-domain')} initialOpen={false}>
						
						<PanelRow>
							
							<div className="mx-timezone-clocks-types">
								{imageNames.map((image, index) => {
									return (<div key={index}>
										<label htmlFor={'mx-timezone-clocks-type'+index}>
											<img src={mxdfmtzc_localizer.image_folder + image} />
											<input 
												type="radio" 
												name="mx-timezone-clocks-type"
												id={'mx-timezone-clocks-type'+index}
												value={image}
												onChange={e => {
													setAttributes({ clock_type: e.currentTarget.value })
												}}
												checked={image===attributes.clock_type}
											/>
										</label>
										
									</div>)
								})}
							</div>
							
							

						</PanelRow>

					</PanelBody>
					
				) : ''}

				<PanelBody title={__('Upload Clock', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>

						<div className="mx-timezone-clocks-upload-image">

							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({
										mediaId: media.id
									})}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={attributes.mediaId}
									render={({ open }) => (
										<Button
											icon="upload"
											text={attributes.mediaId ? 'Change Image' : 'Upload Image'}
											variant="secondary"
											onClick={open}
										/>
									)}
								/>
							</MediaUploadCheck>

							<div>
								{attributes.mediaId && attributes?.clock_upload && attributes?.clock_upload !== 'false' ? (

									<div className="mx-timezone-clocks-uploaded-image">

										<img src={attributes.clock_upload} id={attributes.mediaId} />

										<Button
											icon="remove"
											variant="secondary"
											isDestructive="true"
											onClick={() => {
												setAttributes({
													clock_upload: 'false',
													mediaId: null
												})
											}}
										/>
										
									</div>

								) : (<h3>No image!</h3>)}	
							</div>

						</div>
						
					</PanelRow>

				</PanelBody>









			</Panel>

		</InspectorControls>,
		<div 
			key="mx-render"
			{...blockProps}
		>
			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
	];
}
