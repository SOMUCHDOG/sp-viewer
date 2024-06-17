// src/components/LoginForm.js
import axios from 'axios';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { PrimeReactProvider } from 'primereact/api';
import React, {useState, useEffect } from 'react';

const LoginForm = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setNodes(res.data));
  });

  return (
  <div>
  <PrimeReactProvider>
  <TreeTable value={nodes} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}>
    <Column field="AgencyID" header="AgencyID" expander filter filterPlaceholder="Filter by AgencyID"></Column>
    <Column field="AgencyName" header="AgencyName" filter filterPlaceholder="Filter by AgencyName"></Column>
    <Column field="AgencyDescription" header="AgencyDescription" filter filterPlaceholder="Filter by AgencyDescription"></Column>
    <Column field="Subsidiary" header="Subsidiary" filter filterPlaceholder="Filter by Subsidiary"></Column>
    <Column field="TransactionCode" header="TransactionCode" filter filterPlaceholder="Filter by TransactionCode"></Column>
    <Column field="VendorNumberAndSuffix" header="VendorNumberAndSuffix" filter filterPlaceholder="Filter by VendorNumberAndSuffix"></Column>
    <Column field="Address1" header="Address1" filter filterPlaceholder="Filter by Address1"></Column>
    <Column field="Address2" header="Address2" filter filterPlaceholder="Filter by Address2"></Column>
    <Column field="City" header="City" filter filterPlaceholder="Filter by City"></Column>
    <Column field="State" header="State" filter filterPlaceholder="Filter by State"></Column>
    <Column field="Zip" header="Zip" filter filterPlaceholder="Filter by Zip"></Column>
    <Column field="PCA" header="PCA" filter filterPlaceholder="Filter by PCA"></Column>
    <Column field="RevSubObj" header="RevSubObj" filter filterPlaceholder="Filter by RevSubObj"></Column>
    <Column field="LumaCustomer" header="LumaCustomer" filter filterPlaceholder="Filter by LumaCustomer"></Column>
    <Column field="LumaCustomerBillTo" header="LumaCustomerBillTo" filter filterPlaceholder="Filter by LumaCustomerBillTo"></Column>
    <Column field="Number" header="Number" filter filterPlaceholder="Filter by Number"></Column>
    <Column field="Description" header="Description" filter filterPlaceholder="Filter by Description"></Column>
    <Column field="CreatedDate" header="CreatedDate" filter filterPlaceholder="Filter by CreatedDate"></Column>
    <Column field="Project" header="Project" filter filterPlaceholder="Filter by Project"></Column>
    <Column field="Amount" header="Amount" filter filterPlaceholder="Filter by Amount"></Column>
  </TreeTable>
  </PrimeReactProvider>
  </div>
  );
};
// Helper components

export default LoginForm;
