import React from 'react';
import { Card, Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import SummaryItem from 'src/view/widgets/VendorsSummary/SummaryItem';

function VendorsSummary() {
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox>
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            {i18n('widgets.vendorsSummary.title')}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={2}>
            <SummaryItem
              title="Vendor Risks"
              icon="gpp_maybe"
              color="success"
              descriptions={[
                {
                  count: 250,
                  suffix: 'closed',
                },
                {
                  count: 30,
                  suffix: 'open',
                },
                {
                  count: 15,
                  suffix: 'in progress',
                },
              ]}
            />
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default VendorsSummary;
