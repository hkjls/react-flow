interface component {
    color:string,
    status:boolean
}


const CircuitElecModel = (source:(string | undefined | null), target:(string | undefined | null)):component=>{

    if(source == "left-top-dn" && target == "left-center-1-sprt"){
        return {
            color:"#9C50BD",
            status: true
        }
    }

    if(source == "left-center-top-dn" && target == "right-center-1-sprt"){
        return {
            color:"#9C50BD",
            status: true
        }
    }

    if(source == "right-top-dn" && target == "right-1-sprt"){
        return {
            color:"#9C50BD",
            status: true
        }
    }

    if(source == "left-top-dn" && target == "left-up-cbr"){
        return {
            color:"#1DA8B5",
            status: true
        }
    }

    if(source == "left-center-top-dn" && target == "right-up-cbr"){
        return {
            color:"#1DA8B5",
            status: true
        }
    }

    if(source == "left-up-2-lsi" && target == "left-bottom-dn"){
        return {
            color:"green",
            status: true
        }
    }

    // if(source == "left-lsi" && target == "left-bottom-dn"){
    //     return {
    //         color:"green",
    //         status: true
    //     }
    // }

    if(source == "left-center-up-2-lsi" && target == "left-bottom-center-dn"){
        return {
            color:"green",
            status: true
        }
    }

    if(source == "right-center-up-2-lsi" && target == "right-bottom-dn"){
        return {
            color:"green",
            status: true
        }
    }

    if(source == "left-up-thr" && target == "left-down-lsi"){
        return {
            color:"blue",
            status: true
        }
    }

    if(source == "center-up-thr" && target == "left-center-down-lsi"){
        return {
            color:"blue",
            status: true
        }
    }

    if(source == "right-up-thr" && target == "right-center-down-lsi"){
        return {
            color:"blue",
            status: true
        }
    }

    if(source == "left-center-2-sprt" && target == "left-down-2-thr"){
        return {
            color:"yellow",
            status: true
        }
    }

    if(source == "right-center-2-sprt" && target == "center-down-2-thr"){
        return {
            color:"yellow",
            status: true
        }
    }

    if(source == "right-2-sprt" && target == "right-down-2-thr"){
        return {
            color:"yellow",
            status: true
        }
    }

    if(source == "left-2-sprt" && target == "left-4-msckt"){
        return {
            color:"yellow",
            status: true
        }
    }

    if(source == "left-bottom-cbr" && target == "left-top-lci"){
        return {
            color:"#7D0AE9",
            status: true
        }
    }

    if(source == "right-bottom-cbr" && target == "right-top-lci"){
        return {
            color:"#7D0AE9",
            status: true
        }
    }

    if(source == "left-1-msckt" && target == "left-1-sprt"){
        return {
            color:"#F06C07",
            status: true
        }
    }

    if(source == "left-3-msckt" && target == "left-1-sckt"){
        return {
            color:"#F06C07",
            status: true
        }
    }

    if(source == "left-2-msckt" && target == "right-3-sckt"){
        return {
            color:"#F06C07",
            status: true
        }
    }

    if(source == "left-bottom-lci" && target == "left-5-msckt"){
        return {
            color:"#9F4C1F",
            status: true
        }
    }

    if(source == "left-bottom-lci" && target == "center-bottom-lci"){
        return {
            color:"#9F4C1F",
            status: true
        }
    }

    if(source == "left-up-cbrn" && target == "center-bottom-lci"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "right-up-1-lsi" && target == "left-bottom-cbrn"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "left-6-sckt" && target == "left-bottom-cbrn"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "right-bottom-lci" && target == "right-up-cbrn"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "left-up-center-top-dn" && target == "right-bottom-cbrn"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "left-center-down-1-thr" && target == "right-bottom-cbrn"){
        return {
            color:"#6b7075",
            status: true
        }
    }
    if(source == "right-1-sckt" && target == "left-bottom-down-center-dn"){
        return {
            color:"green",
            status: true
        }
    }
    if(source == "right-2-sckt" && target == "right-center-down-1-thr"){
        return {
            color:"yellow",
            status: true
        }
    }
    if(source == "left-5-sckt" && target == "left-down-1-thr"){
        return {
            color:"yellow",
            status: true
        }
    }

    if(source == "right-up-2-lsi" && target == "left-3-sckt"){
        return {
            color:"green",
            status: true
        }
    }
    if(source == "left-4-sckt" && target == "right-down-lsi"){
        return {
            color:"blue",
            status: true
        }
    }
    if(source == "left-up-1-lsi" && target == "right-down-lsi"){
        return {
            color:"blue",
            status: true
        }
    }
    if(source == "left-2-sckt" && target == "right-down-1-thr"){
        return {
            color:"yellow",
            status: true
        }
    }



    if(source == "left-6-sckt-d" && target == "down-red1"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "right-1-sckt-d" && target == "up-red3"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "right-2-sckt-d" && target == "down-red3"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "left-2-sckt-d" && target == "up-btn-red2"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "down-btn-red2" && target == "up-btn-green"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "down-btn-red2" && target == "left-3-sckt-d"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "left-4-sckt-d" && target == "down-btn-green"){
        return {
            color:"black",
            status: true
        }
    }
    if(source == "left-5-sckt-d" && target == "up-red1"){
        return {
            color:"black",
            status: true
        }
    }

    return {
        color:"red",
        status: false
    }
}

export default CircuitElecModel