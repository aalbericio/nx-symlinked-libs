This example includes 2 folders: 

- shared/
- angular-monorepo/

"shared" is as very simple angular library to showcase a symbolic linked library inside an Nx angular monorepo (angular-monorepo)

To run the application:

1) cd angular-monorepo
2) npm i
3) npx nx serve angular-monorepo

You will see that the application runs with no errors. The app-component is importing and using a "shared" component and everything works as expected: the "shared" library is treated as a first-class (non symlinked library)

What's interesting here is that Nx seems not to detect this "shared" library as a project: 

- npx nx show projects
- npx nx graph

Nx does not include this "shared" library. This effectively results in an invisible/non-buildable library for Nx.

Am I missing something here? 

My project is configured with "preserveSymLinks: true" and everything seems to work fine in terms of TS, Vite, etc but Nx keeps on excluding these symlinked libs without any aparent reason.
