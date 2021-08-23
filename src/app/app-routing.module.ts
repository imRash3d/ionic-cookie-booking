import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },


  {
    path: 'home',
    loadChildren: () => import('./app-frontend/pages/product-list-view/product-list-view.module').then( m => m.ProductListViewPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./app-frontend/pages/app-add-cart/app-add-cart.module').then( m => m.AppAddCartPageModule)
  },
  {
    path: 'view-order',
    loadChildren: () => import('./app-frontend/pages/app-view-order/app-view-order.module').then( m => m.AppViewOrderPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./app-frontend/pages/app-checkout/app-checkout.module').then( m => m.AppCheckoutPageModule)
  },
  {
    path: 'success-order',
    loadChildren: () => import('./app-frontend/pages/success-order/success-order.module').then( m => m.SuccessOrderPageModule)
  },
  {
    path: 'app-product-list',
    loadChildren: () => import('./app-admin/pages/app-product-list/app-product-list.module').then( m => m.AppProductListPageModule)
  },
  {
    path: 'app-product-detail',
    loadChildren: () => import('./app-admin/pages/app-product-detail/app-product-detail.module').then( m => m.AppProductDetailPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./app-admin/pages/app-add-product/app-add-product.module').then( m => m.AppAddProductPageModule)
  },
  {
    path: 'edit/product/:productId',
    loadChildren: () => import('./app-admin/pages/app-add-product/app-add-product.module').then( m => m.AppAddProductPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./app-admin/pages/app-order-list/app-order-list.module').then( m => m.AppOrderListPageModule)
  },
  {
    path: 'order-detail/:id',
    loadChildren: () => import('./app-admin/pages/app-order-detail/app-order-detail.module').then( m => m.AppOrderDetailPageModule)
  },
  {
    path: 'app-assigned-order-list',
    loadChildren: () => import('./app-delivery-user/pages/app-assigned-order-list/app-assigned-order-list.module').then( m => m.AppAssignedOrderListPageModule)
  },
  {
    path: 'app-assigned-order-detail',
    loadChildren: () => import('./app-delivery-user/pages/app-assigned-order-detail/app-assigned-order-detail.module').then( m => m.AppAssignedOrderDetailPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./app-frontend/pages/view-product-detail/view-product-detail.module').then( m => m.ViewProductDetailPageModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./app-auth/app-auth.module').then( m => m.AppAuthPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./app-admin/pages/app-customer/app-customer.module').then( m => m.AppCustomerPageModule)
  },
  {
    path: 'customer-detail',
    loadChildren: () => import('./app-admin/pages/app-customer-detail/app-customer-detail.module').then( m => m.AppCustomerDetailPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./app-admin/pages/app-category/app-category.module').then( m => m.AppCategoryPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./app-frontend/pages/app-contact-us/app-contact-us.module').then( m => m.AppContactUsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./app-frontend/pages/app-about-us/app-about-us.module').then( m => m.AppAboutUsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./app-welcome/app-welcome.module').then( m => m.AppWelcomePageModule)
  },
  {
    path:'**',
    redirectTo:'/welcome'
  },
 
 

  
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
