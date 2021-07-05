const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'信息导论',
                date:'2020-1-20',
                price:89,
                count:109
            },
            {
                id:2,
                name:'计算机操作系统',
                date:'2010-1-20',
                price:56,
                count:2
            },
            {
                id:3,
                name:'数字信号处理',
                date:'1990-1-20',
                price:34.30,
                count:10
            },{
                id:4,
                name:'数学分析',
                date:'2000-1-20',
                price:40.00,
                count:8
            },{
                id:5,
                name:'线性代数',
                date:'2001-1-20',
                price:28.00,
                count:9
            }
        ]
    },
    methods:{
        // getFinalPrice(price) {
        //     return '¥'+price.toFixed(2)
        // }
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removehandle(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let total = 0
            for (let i = 0; i < this.books.length; i++){
                total += this.books[i].count * this.books[i].price
            }
            return total
        }
    },
    filters:{
        getFinalPrice(price) {
            return '¥'+price.toFixed(2)
        }
    }
})