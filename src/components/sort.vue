<template>
  <div class="sort">
    <div class="sort-header">
      <h1>{{ sort.sortName }}</h1>
      <div class="sort-labels">
        <el-tag
          v-for="label in sort.labels"
          :key="label"
          @click="listArticle(label)"
          :type="label === labelId ? 'primary' : 'info'"
          class="label-tag"
        >
          {{ label }}
        </el-tag>
      </div>
    </div>
    <div class="article-list">
      <div v-for="article in articles" :key="article.id" class="article-item" @click="goArticle(article.id)">
        <div class="article-cover">
          <img :src="article.cover" :alt="article.title">
        </div>
        <div class="article-info">
          <h2>{{ article.title }}</h2>
          <p class="article-meta">
            <span>发布时间：{{ article.createTime }}</span>
            <span>阅读量：{{ article.viewCount }}</span>
          </p>
          <p class="article-content">{{ article.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const twoPoem = () => import( "./common/twoPoem");
  const proTag = () => import( "./common/proTag");
  const articleList = () => import( "./articleList");
  const myFooter = () => import( "./common/myFooter");

  export default {
    components: {
      twoPoem,
      proTag,
      articleList,
      myFooter
    },

    data() {
      return {
        sortId: this.$route.query.sortId,
        labelId: this.$route.query.labelId,
        sort: null,
        pagination: {
          current: 1,
          size: 10,
          total: 0,
          searchKey: "",
          sortId: this.$route.query.sortId,
          labelId: this.$route.query.labelId
        },
        articles: []
      }
    },

    computed: {
      sortId() {
        return this.$route.params.id
      }
    },

    watch: {
      $route() {
        this.pagination = {
          current: 1,
          size: 10,
          total: 0,
          searchKey: "",
          sortId: this.$route.query.sortId,
          labelId: this.$route.query.labelId
        };
        this.articles.splice(0, this.articles.length);
        this.sortId = this.$route.query.sortId;
        this.labelId = this.$route.query.labelId;
        this.getSort();
        this.getArticles();
      }
    },

    created() {
      this.getSort();
      this.getArticles();
    },

    mounted() {
    },

    methods: {
      pageArticles() {
        this.pagination.current = this.pagination.current + 1;
        this.getArticles();
      },

      getSort() {
        this.sort = this.$store.state.sortInfo.find(s => s.id === parseInt(this.sortId));
      },
      listArticle(label) {
        this.labelId = label;
        this.articles = this.$store.state.articles.filter(a => 
          a.sortId === parseInt(this.sortId) && 
          a.labels.includes(label)
        );
      },
      getArticles() {
        this.articles = this.$store.state.articles.filter(a => 
          a.sortId === parseInt(this.sortId)
        );
      },
      goArticle(id) {
        this.$router.push(`/article/${id}`);
      }
    }
  }
</script>

<style scoped>
  .sort {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .sort-header {
    margin-bottom: 30px;
  }

  .sort-header h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .sort-labels {
    margin-bottom: 20px;
  }

  .label-tag {
    margin-right: 10px;
    cursor: pointer;
  }

  .article-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .article-item {
    display: flex;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.3s;
  }

  .article-item:hover {
    transform: translateY(-5px);
  }

  .article-cover {
    width: 200px;
    height: 120px;
    overflow: hidden;
    border-radius: 4px;
  }

  .article-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .article-info {
    flex: 1;
  }

  .article-info h2 {
    margin: 0 0 10px 0;
    font-size: 1.5em;
  }

  .article-meta {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
  }

  .article-meta span {
    margin-right: 20px;
  }

  .article-content {
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
