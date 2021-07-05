
const  app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id: 1,
                name: '计算机操作系统',
                price: 100,
                count: 1,
                date: '1999-10-20'
            },
            {
                id:2,
                name:'数学分析',
                price:36,
                count:1,
                date:'2000-10-20'
            },
            {
                id:3,
                name:'线性代数',
                price:58.10,
                count:1,
                date:'1998-8-20'
            },
            {
                id:4,
                name:'opencv深入浅出',
                price:108,
                count:1,
                date:'2005-5-20'
            },
        ]
    },
    computed:{
        totalprice () {
            let total = 0
            return this.books.reduce(function (pre,book) {
               return pre + book.price*book.count
            },0)
        }
    },
    methods:{
        increment(index) {
            console.log("increment")
            this.books[index].count ++
        },
        decrement(index) {
            console.log("decrement")
            this.books[index].count --
        },
        remove(index) {
            this.books.splice(index,1)
        }
    },
    filters:{
        showprice(price){
            return '$' + price.toFixed(2)
        }
    }
})