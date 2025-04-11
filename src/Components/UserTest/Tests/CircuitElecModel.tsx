const CircuitElecModel = (source:(string | undefined | null), target:(string | undefined | null))=>{
    if(source == "left-top-dn" && target == "left-center-1-sprt"){
        return true
    }

    if(source == "left-center-top-dn" && target == "right-center-1-sprt"){
        return true
    }

    if(source == "right-top-dn" && target == "right-1-sprt"){
        return true
    }

    if(source == "left-lsi" && target == "left-bottom-dn"){
        return true
    }

    if(source == "left-lsi" && target == "left-bottom-dn"){
        return true
    }

    if(source == "left-center-lsi" && target == "left-bottom-center-dn"){
        return true
    }

    if(source == "right-center-lsi" && target == "right-bottom-dn"){
        return true
    }

    if(source == "left-thr" && target == "left-lsi"){
        return true
    }

    if(source == "center-thr" && target == "left-center-lsi"){
        return true
    }

    if(source == "right-thr" && target == "right-center-lsi"){
        return true
    }

    if(source == "left-center-2-sprt" && target == "right-up-thr"){
        return true
    }

    if(source == "right-center-2-sprt" && target == "center-up-thr"){
        return true
    }

    if(source == "right-2-sprt" && target == "left-up-thr"){
        return true
    }

    if(source == "left-top-dn" && target == "left-up-cbr"){
        return true
    }

    if(source == "left-center-top-dn" && target == "right-up-cbr"){
        return true
    }

    if(source == "left-bottom-cbr" && target == "left-top-lci"){
        return true
    }

    if(source == "right-bottom-cbr" && target == "right-top-lci"){
        return true
    }

    if(source == "left-1-msckt" && target == "left-1-sprt"){
        return true
    }

    if(source == "left-2-sprt" && target == "left-4-msckt"){
        return true
    }

    if(source == "left-3-msckt" && target == "left-1-sckt"){
        return true
    }

    if(source == "left-2-msckt" && target == "right-3-sckt"){
        return true
    }

    if(source == "left-bottom-lci" && target == "left-5-msckt"){
        return true
    }

    if(source == "left-bottom-lci" && target == "center-bottom-lci"){
        return true
    }
    return false
}

export default CircuitElecModel