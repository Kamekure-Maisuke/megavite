#!/bin/sh
set -e
export LC_ALL=C

NOW=$(date '+%Y-%m-%d_%H:%M:%S')
TODAY="${NOW%_*}"
CONTENTS_DIR="$(dirname "$0")/../contents"

# 存在してたら作成しない
[ -e "${CONTENTS_DIR}/${TODAY}.md" ] && {
  echo "今日は作成済み"
  exit 1
}

# blogコンテンツの中身
contents(){
cat <<EOF
---
title: タイトル
description: 説明
tags:
  - "タグ1"
  - "タグ2"
  - "タグ3"
created_at: $NOW
---

- サンプル本文
EOF
}

# 作成
contents > "${CONTENTS_DIR}/${TODAY}.md"