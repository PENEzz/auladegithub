class bacteria{
    constructor(tamanho, forma, coloração, mobilidade, infecciosidade, reprodução, metabolismo, agrupamentos){

    this.tamanho = tamanho;
    this.forma = forma;
    this.coloração = coloração;
    this.mobilidade = mobilidade;
    this.infecciosidade = infecciosidade;
    this.reprodução = reprodução;
    this.metabolismo = metabolismo;
    this.agrupamentos = agrupamentos;
    }
}
//////////////////////
//////////////////////
class detalhes{
    mostrardetalhes(bac){
        console.log("Tamanho: "+bac.tamanho);
        console.log("Forma: "+bac.forma);
        console.log("Coloração: "+bac.coloração);
        console.log("Mobilidade: "+bac.mobilidade);
        console.log("Infecciosidade: "+bac.infecciosidade);
        console.log("Reprodução: "+bac.reprodução);
        console.log("Metabolismo: "+bac.metabolismo);
        console.log("Agrupamentos: "+bac.agrupamentos);
    }
}
/////////////////////
/////////////////////
let Streptococcus_pyogenes = new bacteria("0,5 a 1,0μm largura e 0,5 a 2,0μm comprimento", "cocos", "Gram-positiva", "não móvel", "altamente infecciosa", "fissão binária", "aeróbica facultativa", "cadeias longas ou pares");
let Neisseria_gonorrhoeae = new bacteria("0,6 a 1,0μm largura e 0,6 a 1,5μm comprimento", "diplocos", "Gram-negativa", "não móvel com flagelo", "altamente infecciosa", "fissão binária", "aeróbica", "diplocos");
let Mycobacterium_tuberculosis = new bacteria("0,2 a 0,6μm largura e 2 a 4μm comprimento", "bacilar e alongada", "Gram-positiva", "não móvel", "altamente infecciosa", "fissão binária", "aeróbica", "possíveis colônias");
let Acinetobacter_baumannii = new bacteria("0,5 a 1,5μm largura e 1,0 a 3,5μm comprimento", "bacilar e alongada", "Gram-negativa", "não móvel", "oportunista", "fissão binária", "aeróbica", "colônias individuais");
let Escherichia_coli = new bacteria("0,5 a 1,0μm largura e 1,5 a 3,0μm comprimento", "bacilar e reta", "Gram-negativa", "móvel", "comensal", "fissão binária", "aeróbica facultativa", "colônias individuais ou em pares");
let Klebsiella_pneumoniae = new bacteria("0,5 a 0,8μm largura e 1,0 a 2,5μm comprimento", "bacilar e reta", "Gram-negativa", "não móvel", "oportunista", "fissão binária", "aeróbica", "colônias individuais ou em pares");
let Clostridium_difficile = new bacteria("0,5 a 1,5μm largura e 3 a 8μm comprimento", "bacilar e reta", "Gram-positiva", "não móvel", "oportunista", "fissão binária", "anaeróbica", "colônias individuais");
let Pseudomonas_aeruginosa = new bacteria("0,5 a 0,8μm largura e 1,5 a 3,0 comprimento", "bacilar e reta", "Gram-negativa", "altamente móvel", "oportunista", "fissão binária", "aeróbica", "colônias individuais ou raramente biofilmes em superfícies");
let Burkholderia_cepacia = new bacteria("0,5 a 1,5μm largura e 1,5 e 3,5μmcomprimento", "bacilar e reta", "Gram-negativa", "altamente movel", "oportunista", "fissão binária", "aeróbica", "colônias individuais");
let Staphylococcus_aureus = new bacteria("0,5 a 1,0μm de diâmetro", "cocos em arranjos irregulares", "Gram-positiva", "não móvel", "patogênica", "fissão binária", "aeróbica facultativa", "cachos ou 'grumos de uva'");
/////////////////////
/////////////////////
let detalhes = new detalhes();
detalhes.mostrardetalhes(Streptococcus_pyogenes);
detalhes.mostrardetalhes(Neisseria_gonorrhoeae);
detalhes.mostrardetalhes(Mycobacterium_tuberculosis);
detalhes.mostrardetalhes(Acinetobacter_baumannii);
detalhes.mostrardetalhes(Escherichia_coli);
detalhes.mostrardetalhes(Klebsiella_pneumoniae);
detalhes.mostrardetalhes(Clostridium_difficile);
detalhes.mostrardetalhes(Pseudomonas_aeruginosa);
detalhes.mostrardetalhes(Burkholderia_cepacia);
detalhes.mostrardetalhes(Staphylococcus_aureus);
/////////////////////
/////////////////////
console.log("Informações")
console.log("Gram-positiva e gram-negativa vem de uma técnica chamada 'coloração de Gram' essa técnica é amplamente utlizada na microbiologia, as Gram-positiva tem coloração violeta-azul durante o processo de coloração de Gram e aparecem em roxo quando vistas em um microscópio, isso ocorre por causa que a bactéria tem uma parede celular espessa, composta por uma camada de peptidoglicano, já a Gram-negativa têm parede celular mais fina, e retêm a coloração rosa durante o processo de Gram");
console.log("As bactérias tem diferentes formas como cocos; vibrião; espiral; bacilos; cocos tem o formato esférico, vibrião tem o formato de vírgula, espiral tem formtao de espiral e bacilos tem formato de bastonete");
console.log("Colônias podem se formar apenas de bacterias de formato cocos e bacilares, como diplocos pares de cocos agrupados, estreptococos cocos agrupados como um colar, estafilococos que são cocos em forma de cacho, sarcina cocos agrupados de forma cúbica, diplobacilosbacilos agrupados em pares, estreptobacilos bacilos em cadeia");
console.log("Fissão binária é o processo de reprodução assexuada dos organismos unicelulares que consiste na divisão de uma célula em duas por mitose, cada uma com o mesmo genoma da 'célula-mãe'");
console.log("O metabolismo pode funcionar de diversas formas, entre elas a aeróbica precisa de oxigênio para viver, anaeróbica não consegue viver em um ambiente com oxigênio e a aeróbica facultativa que podem viver em um ambiente com ou sem oxigênio");
console.log("")