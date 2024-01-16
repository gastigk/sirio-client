import React from 'react';

import { childrenType } from '@/interFace/interFace';
import AdminRoute from '@/privetRoute/PrivetRoute';

const AdminWrapper = ({ children }: childrenType) => {
    return (
        <>
            <AdminRoute>
                {children}
            </AdminRoute>
        </>
    );
};

export default AdminWrapper;