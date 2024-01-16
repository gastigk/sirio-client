import React from 'react';

import { ChildrenType } from '@/interFace/interFace';
import AdminRoute from '@/privetRoute/PrivetRoute';

const AdminWrapper = ({ children }: ChildrenType) => {
    return (
        <>
            <AdminRoute>
                {children}
            </AdminRoute>
        </>
    );
};

export default AdminWrapper;