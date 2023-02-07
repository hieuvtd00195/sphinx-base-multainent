import { Box, Container, IconButton, InputAdornment } from '@mui/material';
import Page from 'components/Page';
import PageBreadcrumbs from 'components/Page/PageBreadcrumbs';
import PageWrapper from 'components/Page/PageWrapper';
import ActionButton from 'components/ProButton/ActionButton';
import ProForm from 'components/ProForm';
import ProFormGroup from 'components/ProForm/ProFormGroup';
import ProFormLabel from 'components/ProForm/ProFormLabel';
import ProFormTextField from 'components/ProForm/ProFormTextField';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Validation from 'utils/Validation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import type { MouseEvent } from 'types/react';

interface FormValues {
  password: string;
  repassword: string;
}
const Roles = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const form = useForm<FormValues>({
    mode: 'onChange',
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword: MouseEvent = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const handleMouseDownPassword2: MouseEvent = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values: FormValues) => {};
  return (
    <Page title={'Change Password'}>
      <PageWrapper title={t('Thay đổi mật khẩu')}>
        <PageBreadcrumbs title={t('Thay đổi mật khẩu')} items={[]} />
        <Box
          sx={{
            backgroundColor: 'background.paper',
            flexGrow: 1,
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gap: 3,
            p: 3,
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: 0,
              gap: 10,
              marginTop: 5,
            }}
          >
            <Box style={{ width: '50%' }}>
              <ProForm form={form} onFinish={handleSubmit}>
                <ProFormGroup>
                  <ProFormLabel required title="Password" name="password">
                    <ProFormTextField
                      name="password"
                      validate={Validation.string()}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ProFormLabel>
                  <ProFormLabel
                    required
                    title="Confirm Password"
                    name="repassword"
                  >
                    <ProFormTextField
                      name="repassword"
                      validate={Validation.string()}
                      type={showPassword2 ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword2}
                              onMouseDown={handleMouseDownPassword2}
                              edge="end"
                            >
                              {showPassword2 ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ProFormLabel>
                </ProFormGroup>

                <Box sx={{ mt: 3 }}>
                  <ActionButton
                    size="large"
                    type="submit"
                    actionType="save"
                    // loading={form.formState.isSubmitting}
                  >
                    Save
                  </ActionButton>
                </Box>
              </ProForm>
            </Box>
          </Container>
        </Box>
      </PageWrapper>
    </Page>
  );
};

export default Roles;
