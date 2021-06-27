const ghpages = require('gh-pages');
const config = require('../foundryvtt.config');

const repo = config.githubRepo;
const branch = config.githubBranch;
const repository = `https://github.com/${repo}.git`;

const options = {
    branch: config.branch,
    repo: repository,
}

ghpages.publish('dist', options)