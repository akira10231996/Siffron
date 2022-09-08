import { Card } from '@mui/material';
import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/organizationProfile/importer/organizationProfileImporterActions';
import fields from 'src/modules/organizationProfile/importer/organizationProfileImporterFields';
import selectors from 'src/modules/organizationProfile/importer/organizationProfileImporterSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import importerHoc from 'src/view/shared/importer/Importer';

function OrganizationProfileImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.organizationProfile.importer.hint'),
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
              {i18n(
                'entities.organizationProfile.importer.title',
              )}
            </MDTypography>
          </MDBox>
        </MDBox>
        <Importer />
      </Card>
    </>
  );
}

export default OrganizationProfileImportPage;
