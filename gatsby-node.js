// const { resolve } = require('path');

// exports.createPages = async ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   const result = await graphql(`
//     {
//       allDirectory(filter: { relativePath: { ne: "" } }) {
//         edges {
//           node {
//             absolutePath
//             relativePath
//           }
//         }
//       }
//     }
//   `);
//   const pages = result.data.allDirectory.edges.map(data => ({
//     ...data.node,
//     slug: data.node.relativePath,
//     file: data.node.absolutePath
//   }));

//   pages.forEach(page => {
//     createPage({
//       path: `/${page.slug}`,
//       component: require.resolve('./src/template/issue'),
//       context: {
//         file: page.file
//       }
//     });
//   });
// };
