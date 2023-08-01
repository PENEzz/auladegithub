class bacteria{
    Streptococcus_pyogenes(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos){
    Neisseria_gonorrhoeae(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Mycobacterium_tuberculosis(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Acinetobacter_baumannii(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Escherichia_coli (E. coli)(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Klebsiella_pneumoniae(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Clostridium_difficile(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Pseudomonas_aeruginosa(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Burkholderia_cepacia(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);
    Staphylococcus_aureus (MRSA)(tamanho, forma, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos);

    this.tamanho = tamanho;
    this.forma = forma;
    this.mobilidade = mobilidade;
    this.infecciosidade = infecciosidade;
    this.reprodução = reprodução;
    this.metabolismo = metabolismo;
    this.agrupamentos = agrupamentos;
    }
}

class detalhes{
    mostrardetalhes(bac){
        console.log("Tamanho: "+bac.tamanho);
        console.log("Forma: "+bac.forma);
        console.log("Mobilidade: "+bac.mobilidade);
        console.log("Infecciosidade: "+bac.infecciosidade);
        console.log("Reprodução: "+bac.reprodução);
        console.log("Metabolismo: "+bac.metabolismo);
        console.log("Agrupamentos: "+bac.agrupamentos);
    }
}

let Streptococcus_pyogenes = new bacteria("0,5 a 1,0μm largura e 0,5 a 2,0μm comprimento", "cocos", "não móvel", "altamente infecciosa", "fissão binária", "aeróbica facultativa", "cadeias longas ou pares");
let Neisseria_gonorrhoeae = new bacteria("0,6 a 1,0μm largura e 0,6 a 1,5μm comprimento", "diplocos", "não móvel com flagelo", "altamente infecciosa", "fissão binária", "aeróbica", "diplocos");
let Mycobacterium_tuberculosis = new bacteria("0,2 a 0,6μm largura e 2 a 4μm comprimento", "bacilar", "não móvel", "altamente infecciosa", "fissão binária", "aeróbica", "possíveis colonias");
