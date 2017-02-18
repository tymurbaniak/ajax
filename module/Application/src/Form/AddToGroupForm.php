<?php
namespace Application\Form;

use Zend\Form\Form;
use Zend\Form\Fieldset;
use Zend\InputFilter\InputFilter;

/**
 *
 */
class AddToGroupForm extends Form {
    
    
    public function __construct() {
        parent::__construct('addtogroup-form');
        
        $this->setAttribute('method', 'post');
        
        $this->addElements();
        $this->addInputFilter();
    }
    
    public function addElements(){
        
        $this->add([            
            'type'  => 'select',
            'name' => 'select',
            'options' => [
                'label' => 'Example select',
				'value_options' => [
					1 => 'First option',
					2 => 'Second option',
				],
            ],
        ]);
        
        $this->add([
            'type'  => 'button',
            'name' => 'cancel',
            'attributes' => [            
                'value' => 'Cancel',
                'data-dismiss'=>'modal'
            ],
        ]); 
        
        $this->add([
            'type'  => 'submit',
            'name' => 'submit',
            'attributes' => [                
                'value' => 'Confirm'
            ],
        ]); 
    }
    
    public function addInputFilter() {
        
    }
    
}
