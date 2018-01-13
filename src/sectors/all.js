import React, { } from 'react';
import coastal_zones_icon from '../images/coastal_zones_icon.svg';
import natural_resources_icon from '../images/natural_resources_icon.svg';
import forestry_icon from '../images/forestry_icon.svg';
import infrastructure_icon from '../images/infrastructure_icon.svg';
import recreation_icon from '../images/recreation_icon.svg';
import public_safety_icon from '../images/public_safety_icon.svg';
import {sortBy}  from 'lodash';
import Isvg from 'react-inlinesvg';


const sectors = {
  'agriculture': {name: "Agriculture", icon: (<span className='fa fa-leaf'></span>), href: "/sectors/agriculture"},
  'coastal_zones': {name: "Coastal Zones", icon: (<Isvg src={coastal_zones_icon} className='coastal-zone-icon' />), href: "/sectors/coastal-zones"},
  'economy': {name: "Economy", icon: (<span className='fa fa-money'></span>), href: "/sectors/economy"},
  'energy': {name: "Energy", icon: (<span className='fa fa-lightbulb-o'></span>), href: "/sectors/energy"},
  'forestry': {name: "Forestry", icon: (<Isvg className='forestry-icon' src={forestry_icon}/>), href: "/sectors/forestry"},
  'infrastructure': {name: "Infrastructure", icon: (<Isvg src={infrastructure_icon} className='infrastructure-icon' />), href: "/sectors/infrastructure"},
  'local_government': {name: "Local Government", icon: (<span className='fa fa-gavel'></span>), href: "/sectors/local-government"},
  'natural_resources': {name: "Natural Resources / Habitats", icon: (<Isvg className='natural-resources-icon' src={natural_resources_icon}/>), href: "/sectors/natural-resources-habitats"},
  'public_health': {name: "Public Health", icon: (<span className='fa fa-medkit'></span>), href: "/sectors/public-health"},
  'public_safety': {name: "Public Safety / Emergency Response", icon: (<Isvg className='public-safety-icon' src={public_safety_icon}/>), href: "/sectors/public-safety-emergency-response"},
  'recreation': {name: "Recreation", icon: (<Isvg className='recreation-icon' src={recreation_icon}/>), href: "/sectors/recreation"},
  'transportation': {name: "Transportation", icon: (<span className='fa fa-truck'></span>), href: "/sectors/transportation"},
  'water_resources': {name: "Water Resources", icon: (<span className='fa fa-tint'></span>), href: "/sectors/water-resources"},
};
const sorted = sortBy(Object.values(sectors), (sec) => sec.title);
const array = sortBy(Object.keys(sectors).map((sec_id) => {
                return [sec_id, sectors[sec_id]]
              }), (sec) => sec[0]);

export default {sectors, sorted, array};
