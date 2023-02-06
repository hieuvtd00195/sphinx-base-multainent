import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import Page from 'components/Page';
import PageBreadcrumbs from 'components/Page/PageBreadcrumbs';
import PageWrapper from 'components/Page/PageWrapper';
import LineChartComponent from 'components/ProCardChart/ProAreaChart';
import { t } from 'i18next';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import ProAreaChart from 'components/ProCardChart/ProAreaChart';
import GroupsIcon from '@mui/icons-material/Groups';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ProBarChart from 'components/ProCardChart/ProBarChart';
import ProRadarChart from 'components/ProCardChart/ProLineChart';
import ProLineChart from 'components/ProCardChart/ProLineChart';

const TextLabelCardChart = styled(Typography)`
  color: #98a6ad;
  font-weight: 600;
  font-size: 14px;
`;
const TextValueLabelCardChart = styled(Typography)`
  color: #34395e;
  font-weight: 700;
  font-size: 26px;
`;
const Overview = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Page title={'Account Management'}>
      <PageWrapper title={t('Thông tin Người dùng')}>
        <PageBreadcrumbs title={t('Dashboard')} items={[]} />
        <Box
          sx={{
            backgroundColor: 'background.default',
            flexGrow: 1,
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gap: 3,
          }}
        >
          <Container
            style={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 0,
              gap: 30,
              maxWidth: lgUp ? 1536 : 1200,
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Card
                  sx={{ minWidth: 400 }}
                  style={{
                    boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                    borderRadius: 10,
                  }}
                >
                  <CardContent style={{ padding: 0 }}>
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 25px 20px 25px',
                      }}
                    >
                      <Box
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: 'purple',
                          borderRadius: 10,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                        }}
                      >
                        <ShoppingCartIcon
                          style={{ color: 'white', width: 25, height: 25 }}
                        />
                      </Box>
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        <TextLabelCardChart>New Orders</TextLabelCardChart>
                        <TextValueLabelCardChart>
                          3.5678
                        </TextValueLabelCardChart>
                      </Box>
                    </Box>

                    <div style={{ height: 100 }}>
                      <ProAreaChart
                        strokeColor="purple"
                        colorGradient="purple"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  sx={{ minWidth: 400 }}
                  style={{
                    boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                    borderRadius: 10,
                  }}
                >
                  <CardContent style={{ padding: 0 }}>
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 25px 20px 25px',
                      }}
                    >
                      <Box
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: '#FE9800',
                          borderRadius: 10,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                        }}
                      >
                        <GroupsIcon
                          style={{ color: 'white', width: 25, height: 25 }}
                        />
                      </Box>
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        <TextLabelCardChart>Customers</TextLabelCardChart>
                        <TextValueLabelCardChart>200</TextValueLabelCardChart>
                      </Box>
                    </Box>

                    <div style={{ height: 100 }}>
                      <ProAreaChart
                        strokeColor="#FE9800"
                        colorGradient={'#FE9800'}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  sx={{ minWidth: 400 }}
                  style={{
                    boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                    borderRadius: 10,
                  }}
                >
                  <CardContent style={{ padding: 0 }}>
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 25px 20px 25px',
                      }}
                    >
                      <Box
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: '#4CAF50',
                          borderRadius: 10,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                        }}
                      >
                        <ConfirmationNumberIcon
                          style={{ color: 'white', width: 25, height: 25 }}
                        />
                      </Box>
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        <TextLabelCardChart>Ticket Resolved</TextLabelCardChart>
                        <TextValueLabelCardChart>577</TextValueLabelCardChart>
                      </Box>
                    </Box>

                    <div style={{ height: 100 }}>
                      <ProAreaChart
                        strokeColor="#4CAF50"
                        colorGradient="#4CAF50"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
				justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                  borderRadius: 2,
                  padding: '0px 20px 20px 20px',
                }}
              >
				<Typography style={{fontWeight: 600, margin: '20px 0px 20px 0px'}}>
					BarChart
				</Typography>
                <div style={{ height: 350, width: 700 }}>
                  <ProBarChart />
                </div>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 20%)',
                  borderRadius: 2,
				  padding: '0px 20px 20px 20px',
                }}
              >
				<Typography style={{fontWeight: 600, margin: '20px 0px 20px 0px'}}>
					BarChart
				</Typography>
                <div style={{ height: 350, width: 700 }}>
                  <ProLineChart />
                </div>
              </Box>
            </Box>
          </Container>
        </Box>
      </PageWrapper>
    </Page>
  );
};

export default Overview;
