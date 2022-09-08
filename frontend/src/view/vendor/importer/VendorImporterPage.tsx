import { Card } from '@mui/material';
import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vendor/importer/vendorImporterActions';
import fields from 'src/modules/vendor/importer/vendorImporterFields';
import selectors from 'src/modules/vendor/importer/vendorImporterSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import importerHoc from 'src/view/shared/importer/Importer';

function VendorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.vendor.importer.hint'),
  );

  return (
    <>
      <Card>
        <MDBox px={3} pt={3}>
          <MDBox
            pb={3}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDTypography variant="h3">
              {i18n('entities.vendor.importer.title')}
            </MDTypography>
          </MDBox>
        </MDBox>
        <Importer />
      </Card>
    </>
  );
}

export default VendorImportPage;
