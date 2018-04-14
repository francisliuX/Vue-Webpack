import '../assets/styles/footer.styl'

export default{
    data(){
        return{
        author:'Jokcy'
        }
    },
    render(){
     
        return(
               //使用jsx可以在这里做任何的js运算
               //要是使用vue的话结构会清晰 方便
            <div id="footer">
            <span>Written by {this.author}</span>
        </div>
        )
    }
}