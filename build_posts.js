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
  let post_template = fs.readFileSync('post_template.js', {
    encoding: 'utf-8',
  });
  posts.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));
  for (let a = 0; a < posts.length; a++) {
    let post = posts[a];
    let post_json = JSON.stringify(post, null, 2);
    let export_path = 'pages/s/' + post.timestamp + '.js';
    export_path,
      fs.writeFileSync(
        export_path,
        `${post_template}
let content = ${post_json};`
      );
  }
}

main();
