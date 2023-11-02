const form = document.getElementById('form');
const close = document.querySelector('.close');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    weight = weight.replace(',', '.');
    height = height.replace(',', '.');

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores numéricos válidos para peso e altura.');
    } else {
        let bmi = (weight / (height * height)).toFixed(2);

        const print_resp = document.getElementById('bmi_result_h2');
        print_resp.classList.remove('hidden');
        print_resp.textContent = `Seu IMC: ${bmi}`;

        const div_info = document.getElementById('infos');
        div_info.classList.toggle('ativo');

        const resultTitle = document.getElementById('result');
        const description = document.getElementById('description');
        const resultImage = document.getElementById('result_img');

        let novoTitulo = '';
        let novaDescricao = '';
        let novaImagem = '';
        let classImagem = '';

        const selectedBfPercentage = document.querySelector('input[name="bf_percentage"]:checked');

        const bf_range_1 = document.getElementById('bf_range_1');
        const bf_range_2 = document.getElementById('bf_range_2');
        const bf_range_3 = document.getElementById('bf_range_3');
        const bf_range_4 = document.getElementById('bf_range_4');

        const selectedRadios = document.querySelectorAll('input[name="bf_percentage"]:checked');
        if (selectedRadios.length === 0) {
            // Nenhum radiobox foi selecionado
            if(bmi < 18){
                novoTitulo = 'Você possui magreza nível 1, 2 ou 3.';
                novaDescricao = 'Seu corpo carece de carne. Neste momento tu precisas desenvolver seu corpo de forma equilibrada, subindo seu peso sem elevar demais os níveis de gordura, pois seu corpo pode sofrer com algumas doenças caso o quadro de magreza avançar.';
                novaImagem = 'assets/images/weak_guy.jpg';
                classImagem = 'weak_guy';
            }
            else if(bmi >= 18 && bmi < 25){
                novoTitulo = 'Seu IMC está adequado!';
                novaDescricao = 'Parabéns! Seu IMC indica um peso saudável. Continue com seus hábitos saudáveis.';
                novaImagem = 'assets/images/normal_guy.jpg';
                classImagem = 'normal_guy';
            }
            else if(bmi >= 25){
                novoTitulo = 'Cuidado, você é Pré-obeso ou obeso!';
                novaDescricao = 'Você esta com grande sobrepeso, pois tu tens enorme quantidade de gordura, sendo sua densidade corporal composta de muita massa gorda, o que pode ocasionar problemas de saúde caso não cuidar.';
                novaImagem = 'assets/images/semiFat_guy.jpg';
                classImagem = 'semiFat_guy';
            }  
        }
        else{
            //MENSAGENS
            if(bmi < 18){
                novoTitulo = 'Você possui magreza nível 1, 2 ou 3.';
                novaDescricao = 'Seu corpo carece de carne. Neste momento tu precisas desenvolver seu corpo de forma equilibrada, subindo seu peso sem elevar demais os níveis de gordura, pois seu corpo pode sofrer com algumas doenças caso o quadro de magreza avançar.';
                novaImagem = 'assets/images/weak_guy.jpg';
                classImagem = 'weak_guy';
            }
            else if(bmi >= 18 && bmi < 25 && selectedBfPercentage.value === bf_range_1.value){
                novoTitulo = 'Você está forte e aesthetic!';
                novaDescricao = 'Ótimo! Você tem um físico melhor que o da maioria e é considerado forte, mesmo não tendo grandes proporções de densidade, seu corpo mantém um equilibrio natural e possui muitas linhas estéticas.';
                novaImagem = 'assets/images/fit_guy.jpg';
                classImagem = 'fit_guy';
            }
            else if(bmi >= 18 && bmi < 25 && selectedBfPercentage.value === bf_range_2.value){
                novoTitulo = 'Você possui um corpo comum.';
                novaDescricao = 'Você não tem sobrepeso e também nem é magro, não possui músculos densos, mas também não sofre da falta deles.';
                novaImagem = 'assets/images/normal_guy.jpg';
                classImagem = 'normal_guy';
            }
            else if(bmi >= 18 && bmi < 25 && selectedBfPercentage.value === bf_range_3.value){
                novoTitulo = 'Você é um "falso magro"!';
                novaDescricao = 'Você não possui grande densidade corporal, mas seu nível de gordura está alto! Você é um falso magro, não tem um peso bom pra sua altura e grande parte do seu peso não consiste em massa muscular. Você precisa treinar!';
                novaImagem = 'assets/images/false_thin.jpg';
                classImagem = 'false_thin';
            }
            else if(bmi >= 18 && bmi < 25 && selectedBfPercentage.value === bf_range_4.value){
                novoTitulo = 'Você precisa de musculos!';
                novaDescricao = 'De acordo com sua densidade e composição corporal, falta-lhe uma quantidades de músculo mínima para compor uma saúde equilibrada! Não só isso, mas você também possui muita gordura, o que pode prejudicar sua saúde e provocar doenças.';
                novaImagem = 'assets/images/false_thin.jpg';
                classImagem = 'false_thin';
            }
            else if(bmi >= 25 && bmi < 30 && selectedBfPercentage.value === bf_range_1.value){
                novoTitulo = 'Corpo de atleta!';
                novaDescricao = 'Parabens! Você possui uma ótima proporção entre musculos e gordura, além de ter densidade alta com grandes volumes de massa muscular. O seu físico é de impressionar e é minoria no mundo!';
                novaImagem = 'assets/images/athlete_guy1.jpg';
                classImagem = 'athlete_guy1';
            }else if(bmi >= 25 && bmi < 30 && selectedBfPercentage.value === bf_range_2.value){
                novoTitulo = 'Você está forte!';
                novaDescricao = 'Ótimo! Você tem um físico melhor que o da maioria e é considerado forte, além de ter uma composição corpórea equilibrada e uma densidade alta, cujo maioria do seu peso é massa muscular';
                novaImagem = 'assets/images/buffed_guy.jpg';
                classImagem = 'buffed_guy';
            }
            else if(bmi >= 25 && bmi < 30 && selectedBfPercentage.value === bf_range_3.value){
                novoTitulo = 'Você está ok, mas cuidado!';
                novaDescricao = 'Você tem um corpo comum, cujo a maioria das pessoas possui, mas você está com sobrepeso de gordura, ou seja, tu precisas perder massa gorda ou enfrentará más consequências.';
                novaImagem = 'assets/images/semiFat_guy.jpg';
                classImagem = 'semiFat_guy';
            }
            else if(bmi >= 25 && bmi < 30 && selectedBfPercentage.value === bf_range_4.value){
                novoTitulo = 'Cuidado, você é Pré-obeso ou obeso!';
                novaDescricao = 'Você esta com grande sobrepeso, pois tu tens enorme quantidade de gordura, sendo sua densidade corporal composta de muita massa gorda, o que pode ocasionar problemas de saúde caso não cuidar.';
                novaImagem = 'assets/images/semiFat_guy.jpg';
                classImagem = 'semiFat_guy';
            }
            else if(bmi >= 30 && selectedBfPercentage.value === bf_range_1.value){
                novoTitulo = 'Monstro!';
                novaDescricao = 'Você tem grande quantidade de massa muscular e uma impressionante densidade muscular, conservando massa magra e retendo pouca gordura no corpo, causando enorme qualidade estética!';
                novaImagem = 'assets/images/monster.jpg';
                classImagem = 'monster';
            }
            else if(bmi >= 30 && selectedBfPercentage.value === bf_range_2.value){
                novoTitulo = 'Corpo de powerlifter!';
                novaDescricao = 'Parabens! Você possui uma ótima proporção entre musculos e gordura, além de ter densidade alta com grandes volumes de massa muscular. O seu físico é de impressionar e é minoria no mundo!';
                novaImagem = 'assets/images/powerlifter_guy.png';
                classImagem = 'powerlifter_guy';
            }
            else if(bmi >= 30 && selectedBfPercentage.value === bf_range_3.value){
                novoTitulo = 'Você está forte! Mas cuidado';
                novaDescricao = 'Ótimo! Você tem um físico melhor que o da maioria e é considerado forte, porém tente manter ou até mesmo reduzir sua porcentagem de gordura, pois mesmo sendo pesado e forte, grande quantidade de massa gorda, pode atrapalhar sua saúde!';
                novaImagem = 'assets/images/semiFat_guy.jpg';
                classImagem = 'semiFat_guy';
            }
            else if(bmi >= 30 && selectedBfPercentage.value === bf_range_4.value){
                novoTitulo = 'Cuidado, você é obeso!';
                novaDescricao = 'Você esta com grande sobrepeso, pois tu tens enorme quantidade de gordura, sendo sua densidade corporal composta de muita massa gorda, o que pode ocasionar problemas de saúde caso não cuidar.';
                novaImagem = 'assets/images/fat_guy.jpg';
                classImagem = 'fat_guy';
            }
        }

        //IMPLEMENTAÇÃO NO QUADRO
        resultTitle.textContent = novoTitulo;
        description.textContent = novaDescricao;
        resultImage.src = novaImagem;
        resultImage.className = classImagem;
        resultImage.setAttribute('alt', 'ilustração corpo');
    }
})

close.addEventListener('click', () => {
    const div_info = document.getElementById('infos');
    div_info.classList.toggle('ativo');
});