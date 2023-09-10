# abort on errors
set -e

git checkout main
git pull origin cypress --rebase
git push
git checkout cypress