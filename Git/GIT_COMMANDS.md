```git status
git add .
git commit -m "message"
git push -u origin master
git log
```

(copy and paste hash)

git checkout (hash)

```
HEAD 
O -> O -> O -> O
              Master
```

```git check master``` - (back to master branch)

---

(revert back to old commit)

```git reset --hard 0d1d7fc32```

(if there is work to keep)
```
git stash
git reset --hard 0d1d7fc32
git stash pop
```
---

(short version, nice & short)

(this is the safe and easy way to rollback to a previous state) (no history is destroyed)

```
git revert --no-commit 0d1d7fc32..HEAD
git commit 
```



#cloning and github intro





 
