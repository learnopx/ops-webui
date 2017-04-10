/*
 (C) Copyright 2015 Hewlett Packard Enterprise Development LP

    Licensed under the Apache License, Version 2.0 (the "License"); you may
    not use this file except in compliance with the License. You may obtain
    a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations
    under the License.
*/

export const LOCALE = 'en-US';

export const NAVS = {
  bgp: 'BGP',
  demo: 'Demo',
  ecmp: 'ECMP',
  general: 'General',
  interface: 'Interfaces',
  log: 'Log',
  lag: 'LAGs',
  monitorInterface: 'Monitor Interface',
  overview: 'Overview',
  syslog: 'Syslog',
  vlan: 'VLANs',
};

export const MESSAGES = {
  absent: 'Absent',
  accessVlanId: 'Access (tag) VLAN ID',
  active: 'Active',
  add: 'Add',
  addDeleteInterfacesFromLag: 'Add/Delete Interfaces From LAG',
  addLag: 'Add LAG',
  addVlan: 'Add VLAN',
  admin: 'Admin',
  'admin_down': 'Admin Down',
  adminState: 'Admin State',
  aggrMode: 'Aggregation Mode',
  alert: 'Alert',
  all: 'All',
  apply: 'Apply',
  areYouSure: 'Are you sure?',
  areYouSureDeleteLag: 'Are you sure you want to delete this LAG?',
  areYouSureSplit: 'Are you sure you want to split this Interface?',
  areYouSureUnSplit: 'Are you sure you want to unsplit this Interface?',
  attributes: 'Attributes',
  available: 'Available',
  autoNeg: 'Auto Negotiation',
  b2f: 'back-to-front',
  baseMac: 'Base MAC',
  bondStatus: 'Bond Status',
  canSplit: 'Split',
  capsEnabled: 'Caps Enabled',
  capsSupported: 'Caps Supported',
  category: 'Category',
  changePw: 'Change Password',
  changePwFailed: 'Change Password Failed',
  chassisId: 'Chassis ID',
  chassisName: 'Chassis Name',
  configMgmtInterface: 'How To - Configure the management interface...',
  configured: 'Configured',
  configVlan: 'How To - Configure a VLAN...',
  confirmation: 'Confirmation',
  confirmNewPw: 'Confirm New Password',
  connector: 'Connector',
  cpuLoad: 'CPU Load',
  critical: 'Critical',
  critAndWarn: 'Critical & Warning',
  critOnly: 'Critical Only',
  currentVlans: 'Current VLANs',
  date: 'Date',
  dataPoints: 'data points',
  debug: 'Debug',
  defaulted: 'Defaulted',
  degreesCelsius: 'C',
  deleteLag: 'Delete LAG',
  deploy: 'Deploy',
  deploying: 'Deploying...',
  details: 'Details',
  direction: 'Direction',
  disabled: 'Disabled',
  down: 'Down',
  downAbsent: 'Down (absent)',
  dstIp: 'Destination IP',
  dstPort: 'Destination Port',
  duplex: 'Duplex',
  ecmp: 'ECMP',
  edit: 'Edit',
  editLag: 'Edit LAG',
  emerg: 'Emerg',
  enabled: 'Enabled',
  error: 'Error',
  exceededMax: 'Exceeded Max',
  f2b: 'front-to-back',
  facility: 'Facility',
  failedRequest: 'Failed Request',
  fallback: 'Fallback',
  false: 'False',
  fans: 'Fans',
  fanFault: 'Fault',
  fanUninitialized: 'Uninitialized',
  fast: 'Fast',
  flowControl: 'Flow Control',
  found: 'found',
  framesRx: 'Frames Rx',
  framesRxDiscarded: 'Frames Rx Discard',
  framesRxUnrecog: 'Frames Rx Unrecog',
  framesTx: 'Frames Tx',
  full: 'Full',
  general: 'General',
  guides: 'Quick Guides',
  half: 'Half',
  hardware: 'Hardware',
  hash: 'Hash',
  hostname: 'Hostname',
  id: 'ID',
  idAndInterfaces: 'ID & Interfaces',
  identifier: 'Identifier',
  information: 'Information',
  interface: 'Interface',
  interfaceId: 'Interface ID',
  interfaceDetails: 'Interface Details',
  interfaces: 'Interfaces',
  invalid: 'Invalid',
  ip: 'IP',
  ipV4: 'IPv4',
  ipV6: 'IPv6',
  isFetching: 'Is Fetching',
  'l2-src-dst': 'L2 Src/Dst',
  'l2vid-src-dst': 'L2 VID Src/Dst',
  'l3-src-dst': 'L3 Src/Dst',
  'l4-src-dst': 'L4 Src/Dst',
  lag: 'LAG',
  lagActorKey: 'Actor Key',
  lagActorSystemId: 'Actor System Id',
  lagActorPortId: 'Actor Port Id',
  lagActorState: 'Actor State',
  lagIdsAvailable: 'LAG IDs Available',
  lagPartnerKey: 'Partner Key',
  lagPartnerSystemId: 'Partner System Id',
  lagPartnerPortId: 'Partner Port Id',
  lagPartnerState: 'Partner State',
  lastHour: 'Last Hour',
  last24hrs: 'Last 24 Hours',
  last7days: 'Last 7 Days',
  lastError: 'Last Error',
  lastUpdate: 'Last Update',
  limitReached: 'Limit Reached',
  linkState: 'Link State',
  links: 'Links',
  lldp: 'LLDP',
  loading: 'Loading...',
  loadBalance: 'Load Balancing By',
  location: 'Location',
  log: 'Log',
  loginFailed: 'Authentication Failed',
  logout: 'Logout',
  mac: 'MAC',
  maxInterfaceSpeed: 'Max Interface Speed',
  memory: 'Memory',
  message: 'Message',
  model: 'Model',
  mtu: 'MTU',
  name: 'Name',
  navToInterface: 'Navigate To Interface',
  neighborInfo: 'Neighbor Information',
  new: 'New',
  newPw: 'New Password',
  'no_member_port': 'No Member Port',
  none: 'None',
  notice: 'Notice',
  notConfigured: 'Not Configured',
  noTopInterfaces: 'Currently no traffic data available...',
  of: 'of',
  off: 'Off',
  ok: 'OK',
  oldPw: 'Old Password',
  on: 'On',
  onieVersion: 'ONIE Version',
  osApi: 'OpenSwitch API',
  osNet: 'OpenSwitch.Net',
  partNumber: 'Part #',
  passive: 'Passive',
  portId: 'Port ID',
  powerSupplies: 'Power Supplies',
  powerFaultInput: 'Input Fault',
  powerFaultOutput: 'Output Fault',
  powerAbsent: 'Absent',
  product: 'Product',
  productName: 'Product Name',
  quickGuide: 'Quick Guide',
  rate: 'Rate',
  readAll: 'Read All',
  reason: 'Reason',
  reenterUserPwd: 'Please re-enter your username and password.',
  resilientHash: 'Resilience Hashing',
  retryChPw: 'Please retry by entering current passowrd and new password correctly',
  rootNotAllowed: 'Login user root not allowed.',
  rpm: 'RPMs',
  rx: 'Rx',
  rxPackets: 'Rx Packets',
  rxBytes: 'Rx Bytes',
  rxErrors: 'Rx Errors',
  rxDropped: 'Rx Dropped',
  rxtx: 'Rx and Tx',
  search: 'Search',
  serialNumber: 'Serial #',
  severity: 'Severity',
  slow: 'Slow',
  speed: 'Speed',
  split: 'Split',
  splitParent: 'Split Parent',
  splitChildren: 'Split Children',
  srcIp: 'Source IP',
  srcPort: 'Source Port',
  state: 'State',
  statistics: 'Statistics',
  status: 'Status',
  storage: 'Storage',
  sysDesc: 'System Desc',
  system: 'System',
  systemMac: 'System MAC',
  tag: 'Tag',
  temperatures: 'Temperatures',
  text: 'Text',
  time: 'Time',
  topInterfaceUtilization: 'Top Interface Utilization',
  total: 'Total',
  totalVlans: 'Total VLANs',
  totalInterfaces: 'Total Interfaces',
  true: 'True',
  trunks: 'Trunks',
  tx: 'Tx',
  txPackets: 'Tx Packets',
  txBytes: 'Tx Bytes',
  txErrors: 'Tx Errors',
  txDropped: 'Tx Dropped',
  txRx: 'Tx+Rx',
  unknown: 'Unknown',
  unSplit: 'Unsplit',
  UnSplitInfCfg: 'Unsplit to configure this Interface',
  up: 'Up',
  url: 'URL',
  user: 'User',
  utilization: 'Utilization',
  vendor: 'Vendor',
  vlanMode: 'VLAN Mode',
  vlans: 'VLANs',
  vlan: 'VLAN',
  vlanId: 'VLAN ID',
  vlanName: 'VLAN Name',
  vlanIdsAvailable: 'VLAN IDs Available',
  version: 'Version',
  warning: 'Warning',
  yes: 'Yes'
};