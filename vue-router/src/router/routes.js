import HelloWorld from '../components/HelloWorld'
import Foo from '../components/Foo'
import Bar from '../components/Bar'
import Baz from '../components/Baz'
import Unicode from '../components/Unicode'
import WithParams from '../components/WithParams'
import NestedRoutes from '../components/NestedRoutes'
import NestedRoutesChild1 from '../components/NestedRoutesChild1'
import NestedRoutesChild2 from '../components/NestedRoutesChild2'
import NamedViews from '../components/NamedViews'
import UserSettings from '../components/NestedNamedViews/UserSettings'
import UserEmailsSubscriptions from '../components/NestedNamedViews/UserEmailsSubscriptions'
import UserProfile from '../components/NestedNamedViews/UserProfile'
import UserProfilePreview from '../components/NestedNamedViews/UserProfilePreview'
import DataFetching from '../components/DataFetching'
import DataFetchingPost from '../components/DataFetching/Post'
import LazyLoadingBeforeMount, { FooAsync } from '../components/LazyLoadingBeforeMount'

const NotFound = () => import('../components/NotFound')

const RouteProps = () => import(/* webpackChunkName: "route-props" */ '../components/RouteProps')
const RoutePropsChild = () =>
  import(/* webpackChunkName: "route-props" */ '../components/RoutePropsChild')

const routes = [
  {
    path: '/',
    name: HelloWorld.name,
    component: HelloWorld,
  },
  {
    path: '/foo',
    name: Foo.name,
    component: Foo,
    meta: { requiresAuth: true },
  },
  {
    path: '/bar',
    name: Bar.name,
    component: Bar,
    meta: { requiresAuth: true },
  },
  {
    path: '/é',
    name: Unicode.name,
    component: Unicode,
  },
  {
    path: '/with-params/:id',
    name: WithParams.name,
    component: WithParams,
    children: [
      {
        path: 'post/:text',
        name: 'Child',
        component: Foo,
      },
      {
        path: '',
        name: 'Default Child',
        component: Bar,
      },
    ],
  },
  {
    path: '/nested-routes/:id',
    name: NestedRoutes.name,
    component: NestedRoutes,
    children: [
      {
        path: 'child1',
        name: NestedRoutesChild1.name,
        component: NestedRoutesChild1,
      },
      {
        path: 'child2',
        name: NestedRoutesChild2.name,
        component: NestedRoutesChild2,
      },
    ],
  },
  {
    path: '/named-views',
    name: NamedViews.name,
    component: NamedViews,
    children: [
      {
        path: 'multiple',
        components: {
          default: Foo,
          a: Bar,
          b: Baz,
        },
      },
    ],
  },
  {
    path: '/nested-named-views/settings',
    name: UserSettings.name,
    component: UserSettings,
    children: [
      {
        path: 'emails',
        alias: '/settings/emails-alias',
        name: UserEmailsSubscriptions.name,
        component: UserEmailsSubscriptions,
      },
      {
        path: 'profile',
        alias: '/settings/profile-alias',
        components: {
          default: UserProfile,
          helper: UserProfilePreview,
        },
      },
    ],
  },
  {
    path: '/route-props',
    name: RouteProps.name,
    component: RouteProps,
    children: [
      { path: '/', component: RoutePropsChild }, // No props, no nothing
      { path: '/hello/:name', component: RoutePropsChild, props: true }, // Pass route.params to props
      { path: '/static', component: RoutePropsChild, props: { name: 'world' } }, // static values
      {
        path: '/dynamic/:years',
        component: RoutePropsChild,
        props: route => ({ name: `${new Date().getFullYear()}${parseInt(route.params.years)}!` }),
      }, // custom logic for mapping between route and props
      { path: '/attrs', component: RoutePropsChild, props: { name: 'attrs' } },
    ],
  },
  {
    path: '/notfound',
    name: NotFound.name,
    component: NotFound,
  },
  {
    path: '/data-fetching',
    name: DataFetching.name,
    component: DataFetching,
    children: [
      {
        path: 'post/:id',
        name: DataFetchingPost.name,
        component: DataFetchingPost,
      },
    ],
  },
  {
    path: '/lazy-loading-before-mount',
    name: LazyLoadingBeforeMount.name,
    component: LazyLoadingBeforeMount,
    children: [
      {
        path: 'async',
        name: FooAsync.name,
        component: FooAsync,
      },
    ],
  },
  // catch all redirect
  {
    path: '*',
    redirect: '/',
  },
]

export default routes
