import useAuth from 'hooks/useAuthState';
import jwtDecode from 'jwt-decode';
// import isEmpty from 'lodash.isempty';
import React, { createContext, useEffect, useState } from 'react';
// import { apiGetUserPermission } from 'services/auth';
import LocalStorage from 'utils/LocalStorage';

type RootRoleType = {
  roleData: any[];
};

const RootRoleValue: RootRoleType = {
  roleData: [],
};

export const RoleContext = createContext(RootRoleValue);
const RoleProvider = ({ children }: { children: React.ReactChild }) => {
  const [value, setValue] = useState<any[]>([]);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      const accessToken = LocalStorage.get("accessToken");
      const {roleList} = jwtDecode<{roleList: string}>(accessToken);
      if(roleList) {
        const parseRoleList = roleList.split(",");
        setValue(parseRoleList);
      }
    //   apiGetUserPermission()
    //     .then((res) => {
    //       if (!isEmpty(res.responseData)) {
    //         const roleArray: string[] = [];
    //         res.responseData.forEach((item: any) => {
    //           if (!isEmpty(item.systemFunctionDetails)) {
    //             roleArray.push(
    //               ...item.systemFunctionDetails.map(
    //                 (detail: any) => detail.functionCode
    //               )
    //             );
    //           }
    //         });
    //         setValue(roleArray);
    //         LocalStorage.set('roleData', roleArray);
    //       } else {
    //         setValue([]);
    //         LocalStorage.remove('roldeData');
    //       }
    //     })
    //     .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  return (
    <RoleContext.Provider value={{ roleData: value }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
