import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { __experimentalNumberControl as NumberControl, Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';
import metadata from './block.json';
import {timeZones} from './timezones';
import {locales} from './locales';

export default function Edit({ attributes, setAttributes }) {

	const blockProps = useBlockProps();

	const onChangeNumber = (number) => {
		setAttributes({ postsNumber: number });
	};

	// time zones
	const formattedTimezones = [];
	
	timeZones.forEach(element => {
		let obj = {
			label: element,
			value: element
		}
		formattedTimezones.push(obj);
	});

	// locales
	const formattedLocales = [];
	
	locales.forEach(element => {
		let obj = {
			label: element,
			value: element
		}
		formattedLocales.push(obj);
	});

	return [
		<InspectorControls key="mx-settings">

			{/* Default */}
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

				<PanelBody title={__('Locales', 'mxmtzc-domain')} initialOpen={false}>
					
					<PanelRow>
						<SelectControl
							onChange={(lang) => setAttributes({ lang })}
							__nextHasNoMarginBottom
							value={attributes.lang}
							options={formattedLocales}
						/>
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
