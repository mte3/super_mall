<template>
  <div id="GoodParams">
    <h4>{{params.key}}</h4>
    <div v-for="i in params.set" class="params">
      <div class="title">{{i.key}}</div>
      <div class="text">{{i.value}}</div>
    </div>
    <div id="rule">

      <div class="rules" v-for="(i,index) in rule.rules">
        <div class="rulesItem" v-for="(a,n) in i">
          {{a}}
        </div>
      </div>

      <h4>{{rule.title}}</h4>

      <p class="ruleText">{{rule.text}}</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodParams",
    props: {
      params: {
        type: Object
      },
      rule: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  #GoodParams {
    padding: 12px;
  }

  .params {
    padding: 12px 0 12px 0;
    display: flex;
    border-bottom: 1px solid #d4ccc6;
  }

  .title {
    flex: 1;
    font-size: 14px;
  }

  .text {
    color: #ff8198;
    flex: 3;
    font-size: 14px;
  }

  #rule {
    padding-top: 12px;
  }
  #rule  h4{
    padding-top: 8px;
  }
  .rules{
    font-size: 14px;
    padding: 10px 0 10px 0;
    display: flex;
  }
  .rulesItem{
    flex: 1;
  }

  .ruleText {
    font-size: 14px;
    padding-top: 8px;
  }

</style>
