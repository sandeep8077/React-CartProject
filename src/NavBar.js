
const NavBar =(props)=>{
    return(
      <div style={styles.navbar}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
             <span style={styles.cartIconContainerCount}>{props.count}</span>
        </div>
        
      </div>
    )
}


const styles = {
    navbar:{
        height:70,
        background:'#4267b2',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:20
    },
    cartIcon:{
        height:50,
        width:50,
        marginRight:20

    },
    cartIconContainer:{
        position:'relative'
    },
    cartIconContainerCount:{
        position:'absolute',
        background:'yellow',
        padding:'4px 4px',
        right:0,
        top:2,
        borderRadius:'50%',
        marginRight:20,
        fontDecoration:'bolder'
    }



}

export default NavBar;