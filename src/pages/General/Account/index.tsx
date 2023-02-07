import { Box, Container, Stack } from '@mui/material';
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
import Avatar from '@mui/material/Avatar';
import Validation from 'utils/Validation';
import AvatarCardUpload from 'components/ProComponents/AvatarCardUpload';
import Chip from '@mui/material/Chip';
import LocalStorage from 'utils/LocalStorage';
import jwt_decode from 'jwt-decode';

interface FormValues {
  fullName: string;
  email: string;
  address: string;
  password: string;
  tenantCode: string;
}

interface IDecode {
	client_id: string;
	email: string;
	email_verified: string;
	exp: number;
	given_name: string;
	iat: number;
	iss: string;
	oi_prst: string;
	oi_tkn_id: string;
	phone_number_verified: string;
	preferred_username: string;
	role: string;
	sub: string;
	unique_name: string;
	name: string;
	emailaddress: string;
	address: string;
  }

const Account = () => {
  const form = useForm<FormValues>({
    mode: 'onChange',
	
  });
console.log(form)
  const [previewImage, setPreviewImage] = useState<string>('');
  const [logo, setLogo] = useState<File | null>();
  const handleDropCover = async ([file]: File[]) => {
    const logoPreview = URL.createObjectURL(file);
    setLogo(file);
    setPreviewImage(logoPreview);
  };

  useEffect(() => {
    setPreviewImage(
      'https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png'
    );
    setLogo(null);
  }, []);

  var token = LocalStorage.get('accessToken');
  var decoded: IDecode = jwt_decode(token);

  useEffect(() => {
	form.reset({
		fullName: decoded.name,
		email: "hieuvtd00195@gmail.com",
		address: "1st Level, HL Tower, 6/82 Duy Tan Street, Cau Giay Ward, Hanoi, Vietnam",
	})
  },[])

  const handleSubmit = async (values: FormValues) => {};
  return (
    <Page title={'Account Management'}>
      <PageWrapper title={t('Thông tin Người dùng')}>
        <PageBreadcrumbs title={t('Thông tin Người dùng')} items={[]} />
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
            <Box>
              <Stack direction="row" spacing={2}>
                <AvatarCardUpload
                  src={previewImage}
                  maxFiles={1}
                  onDrop={handleDropCover}
                />
              </Stack>
            </Box>
            <Box style={{ width: '50%' }}>
              <ProForm form={form} onFinish={handleSubmit}>
                <ProFormGroup>
                  <ProFormLabel required title="Full Name" name="fullName">
                    <ProFormTextField
                      name="fullName"
                      type="text"
                      validate={Validation.fullname()}
					  
                    />
                  </ProFormLabel>
                  <ProFormLabel required title="Email address" name="email">
                    <ProFormTextField
                      name="email"
                      validate={Validation.email()}
                      type="email"
                    />
                  </ProFormLabel>
                  <ProFormLabel title="Address" name="address">
                    <ProFormTextField name="address" type="text" />
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

export default Account;
