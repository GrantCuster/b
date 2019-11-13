let fs = require('fs');
let path = require('path');

function scanDir(dirPath, extension) {
  let files = [];
  let scan = dirPath => {
    let filenames = fs.readdirSync(dirPath);
    filenames.sort();
    filenames.map(filename => {
      let filePath = path.join(dirPath, filename);
      let st = fs.statSync(filePath);
      if (st.isFile() && filePath.endsWith(extension)) {
        files.push(filePath);
      }
      if (st.isDirectory()) {
        scan(filePath);
      }
    });
  };
  scan(dirPath);
  return files;
}

function readPosts(post_path) {
  let post = fs.readFileSync(post_path, { encoding: 'utf-8' });
  return JSON.parse(post);
}

function main() {
  let post_paths = scanDir('messages/', '.json');
  let posts = post_paths.map(readPosts);
  posts.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));
  let posts_json = JSON.stringify(posts, null, 2);
  let export_path = 'posts.js';
  fs.writeFileSync(
    export_path,
    '// automatically generated by build_post_index.js\n' +
      `export default ${posts_json}\n`
  );
  console.info(`Saved ${posts.length} posts in ${export_path}`);
}

main();
