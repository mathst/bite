/* Gráfico 1 */
// var options = {
//     series: [44, 55, 13, 43, 22],
//     chart: {
//         width: 380,
//         type: 'pie',
//     },
//     labels: ['Hamburguer', 'Pão', 'Bacon', 'Queijo', 'Maionese'],
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 200
//             },
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }]
// };

// var chart = new ApexCharts(document.querySelector("#pizza"), options);
// chart.render();


// /* Gráfico 2 */
// var options = {
//     series: [{
//         name: 'Inflation',
//         data: [5.4, 7.3, 8.0, 9.2, 9.5, 10]
//     }],
//     chart: {
//         height: 350,
//         type: 'bar',
//     },
//     plotOptions: {
//         bar: {
//             borderRadius: 10,
//             dataLabels: {
//                 position: 'top', // top, center, bottom
//             },
//         }
//     },
//     dataLabels: {
//         enabled: true,
//         formatter: function(val) {
//             return val + "%";
//         },
//         offsetY: -20,
//         style: {
//             fontSize: '12px',
//             colors: ["#304758"]
//         }
//     },

//     xaxis: {
//         categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
//         position: 'top',
//         axisBorder: {
//             show: false
//         },
//         axisTicks: {
//             show: false
//         },
//         crosshairs: {
//             fill: {
//                 type: 'gradient',
//                 gradient: {
//                     colorFrom: '#D8E3F0',
//                     colorTo: '#BED1E6',
//                     stops: [0, 100],
//                     opacityFrom: 0.4,
//                     opacityTo: 0.5,
//                 }
//             }
//         },
//         tooltip: {
//             enabled: true,
//         }
//     },
//     yaxis: {
//         axisBorder: {
//             show: false
//         },
//         axisTicks: {
//             show: false,
//         },
//         labels: {
//             show: false,
//             formatter: function(val) {
//                 return val + "%";
//             }
//         }

//     },
//     title: {
//         text: 'Logística de Demanda x Consumo',
//         floating: true,
//         offsetY: 330,
//         align: 'center',
//         style: {
//             color: '#444'
//         }
//     }
// };

// var chart = new ApexCharts(document.querySelector("#barras"), options);
// chart.render();

// /* Gráfico 3 */
// var options = {
//     series: [{
//         name: "Vendas",
//         data: [10, 41, 35, 51, 49, 68, 69, 91, 148]
//     }],
//     chart: {
//         height: 350,
//         type: 'line',
//         zoom: {
//             enabled: false
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: 'smooth'
//     },

//     grid: {
//         row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//         },
//     },
//     xaxis: {
//         categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
//     }
// };
// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


/*  dropdown */

// $(document).ready(function() {
//     $('.dropdown-btn').click(function() {
//       $(this).siblings('.dropdown-content').toggle();
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var dropdownButton = document.querySelector('.dropdown-btn' || '.btn-table-dropdown');
//     var dropdownContent = document.querySelector('.dropdown-content');

//     dropdownButton.addEventListener('click', function() {
//         dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//     });
// });

// funçaõ de pesquisar com enter

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        performSearch(searchInput.value);
      }
    });
    
    function performSearch(query) {
      // Aqui você pode executar a ação desejada com o valor do campo de pesquisa
      console.log('Pesquisar:', query);
    }
  });

// função do dropdown

document.addEventListener('DOMContentLoaded', function() {
  var dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(function(button) {
    var dropdownContent = button.nextElementSibling;

    button.addEventListener('click', function() {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// função de validação

(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });

$('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
})

// função para ocultar mensagem

(jQuery);

    // Seleciona todas as divs com a classe "message"
    var messages = document.querySelectorAll('.message');
    
    // Define o tempo que cada mensagem ficará visível (em milissegundos)
    var timeout = 5000;
    
    // Loop através de cada mensagem e configura um temporizador para ocultá-la após o tempo definido
    messages.forEach(function(message) {
        setTimeout(function() {
            message.style.display = 'none';
        }, timeout);
    });