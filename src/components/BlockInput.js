import '../styles/BlockInput.css';
import { useState } from 'react';

function BlockInput() {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the selected values directly from the input


    let placeInput = document.getElementById('place-input').value;
    let hipInput = document.getElementById('hip-input').value;
    let feetPositionInput = document.getElementById('feet-position-input').value;
    let feetOrderInput = document.getElementById('feet-order-input').value;
    let feetOpenCloseInput = document.getElementById('feet-openClose-input').value;
    let stepInput = document.getElementById('step-input').value;
    let numberInput = document.getElementById('number-input').value;
    let legFormInput = document.getElementById('leg-form-input').value;
    let legCardinalInput = document.getElementById('leg-cardinal-input').value;
    let legSideInput = document.getElementById('leg-side-input').value;
    let directionCardinalInput = document.getElementById('direction-cardinal-input').value;
    let directionSideInput = document.getElementById('direction-side-input').value;
    let spinInput = document.getElementById('spin-input').value;
    let leftArmPositionInput = document.getElementById('leftarm-position-input').value;
    let leftArmSideInput = document.getElementById('leftarm-side-input').value;
    let leftArmFormInput = document.getElementById('leftarm-form-input').value;
    let rightArmPositionInput = document.getElementById('rightarm-position-input').value;
    let rightArmSideInput = document.getElementById('rightarm-side-input').value;
    let rightArmFormInput = document.getElementById('rightarm-form-input').value;
    let headInput = document.getElementById('head-input').value;


    let variantInput = '';


    if (document.getElementById('demi').checked === true) {
      variantInput += 'D';
    }
    if (document.getElementById('ferme').checked === true) {
      variantInput += 'F';
    }
    if (document.getElementById('petit').checked === true) {
      variantInput += 'T';
    }
    if (document.getElementById('grand').checked === true) {
      variantInput += 'G';
    }
    if (document.getElementById('quartier').checked === true) {
      variantInput += 'Q';
    }
    if (document.getElementById('plat').checked === true) {
      variantInput += 'L';
    }
    if (document.getElementById('releve').checked === true) {
      variantInput += 'V';
    }
    if (document.getElementById('battus').checked === true) {
      variantInput += 'D';
    }
    if (document.getElementById('changement').checked === true) {
      variantInput += 'C';
    }
    if (document.getElementById('entournant').checked === true) {
      variantInput += 'N';
    }
    if (document.getElementById('plier').checked === true) {
      variantInput += 'P';
    }
    if (document.getElementById('etire').checked === true) {
      variantInput += 'E';
    }
    if (document.getElementById('aterre').checked === true) {
      variantInput += 'T';
    }
    if (document.getElementById('enlair').checked === true) {
      variantInput += 'A';
    }



    let finalBlock = placeInput + hipInput + feetPositionInput + feetOrderInput + feetOpenCloseInput + variantInput + stepInput + numberInput + legFormInput + legCardinalInput + legSideInput + directionCardinalInput + directionSideInput + spinInput + leftArmPositionInput + leftArmSideInput + leftArmFormInput + rightArmPositionInput + rightArmSideInput + rightArmFormInput + headInput;

    console.log('placeinput' + placeInput);
    console.log('hipInput' + hipInput);
    console.log('feetPositionInput' + feetPositionInput);
    console.log('feetOrderInput' + feetOrderInput);
    console.log('feetOpenCloseInput' + feetOpenCloseInput);
    console.log('variantInput' + variantInput);



    console.log(finalBlock);


    // Clear All Inputs


  }

  return (

    <div className='main-container'>

      <form>

        <div className="init L0">
          <div className="h L1">
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Place</div>
                <div className="block-input">

                  <label htmlFor="place-input"></label>
                  <input type="text" id="place-input" list="place-options" />

                  <datalist id="place-options">
                    <option label="Ommited" value=''></option>
                    <option label="Center" value='0'></option>
                    <option label="Front-Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="Front-Right" value='3'></option>
                    <option label="Right" value='4'></option>
                    <option label="Back-Right" value='5'></option>
                    <option label="Back" value='6'></option>
                    <option label="Back-Left" value='7'></option>
                    <option label="Left" value='8'></option>
                  </datalist>

                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles  heads'>Hip</div>
                <div className="block-input">
                  <label htmlFor="hip-input"></label>
                  <input type="text" id="hip-input" list="hip-options" />

                  <datalist id="hip-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="Front Right" value='3'></option>
                    <option label="Right" value='4'></option>
                    <option label="Back Right" value='5'></option>
                    <option label="Back" value='6'></option>
                    <option label="Back Left" value='7'></option>
                    <option label="Left" value='8'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 first-line">
                <div className='titles heads'>Feet</div>
                <div className="block-input">

                  <label htmlFor="feet-position-input"></label>
                  <input type="text" id="feet-position-input" list="feet-position-options" />

                  <datalist id="feet-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Third Position" value='3'></option>
                    <option label="Fourth Position" value='4'></option>
                    <option label="Fifth Position" value='5'></option>
                  </datalist>

                  <label htmlFor="feet-order-input"></label>
                  <input type="text" id="feet-order-input" list="feet-order-options" />

                  <datalist id="feet-order-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right Foot Front" value='+'></option>
                    <option label="Right Foot Back" value='-'></option>
                    <option label="Symmetric" value='='></option>
                  </datalist>

                  <label htmlFor="feet-openClose-input"></label>
                  <input type="text" id="feet-openClose-input" list="feet-openClose-options" />

                  <datalist id="feet-openClose-options">
                    <option label="Opened Position (Usual)" value=''></option>
                    <option label="Closed Position" value='¬'></option>
                  </datalist>

                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Step</div>
                <div className="block-input">
                  <label htmlFor="step-input"></label>
                  <input className="step" type="text" id="step-input" list="step-options" />

                  <datalist id="step-options">
                    <option label="Ommited" value=''></option>
                    <option label="Assemblé" value='as'></option>
                    <option label="Ballonné" value='bn'></option>
                    <option label="Balloté" value='bt'></option>
                    <option label="Battement" value='bm'></option>
                    <option label="Basque (Pas de)" value='bs'></option>
                    <option label="Bourré (Pas de)" value='br'></option>
                    <option label="Brisé" value='bi'></option>
                    <option label="Cabriole" value='cb'></option>
                    <option label="Coupé" value='cp'></option>
                    <option label="Changement/Entrechat" value='ch'></option>
                    <option label="Chassé" value='cs'></option>
                    <option label="Chat (Pas de)" value='ct'></option>
                    <option label="Cheval (Pas de)" value='cv'></option>
                    <option label="Ciseaux (Pas de)" value='cx'></option>
                    <option label="Cloche" value='cl'></option>
                    <option label="Contretemps" value='cn'></option>
                    <option label="Deboulé" value='db'></option>
                    <option label="Degagé" value='dg'></option>
                    <option label="Detourné" value='dt'></option>
                    <option label="Developpé" value='dv'></option>
                    <option label="Decalé" value='dl'></option>
                    <option label="Echappé" value='ep'></option>
                    <option label="Elevé" value='ev'></option>
                    <option label="Emboité" value='eb'></option>
                    <option label="Enveloppé" value='en'></option>
                    <option label="Fait" value='fi'></option>
                    <option label="Flic" value='fc'></option>
                    <option label="Flic-Flac" value='ff'></option>
                    <option label="Fondú (Battement)" value='fn'></option>
                    <option label="Fouetté" value='ft'></option>
                    <option label="Frappé (Battement)" value='fp'></option>
                    <option label="Gargoulliade" value='gg'></option>
                    <option label="Glissade" value='gl'></option>
                    <option label="Jeté" value='jt'></option>
                    <option label="Jeté Entrelacé" value='je'></option>
                    <option label="Pas" value='pa'></option>
                    <option label="Poisson (Pas de)" value='pp'></option>
                    <option label="Polonaise (Pas de)" value='po'></option>
                    <option label="Possé" value='ps'></option>
                    <option label="Marché (Pas de)" value='pm'></option>
                    <option label="Penché" value='pn'></option>
                    <option label="Piqué" value='pq'></option>
                    <option label="Pirouette" value='py'></option>
                    <option label="Plié" value='pl'></option>
                    <option label="Pointé" value='pe'></option>
                    <option label="Promenade" value='pr'></option>
                    <option label="Pied Flex" value='px'></option>
                    <option label="Relevé" value='rv'></option>
                    <option label="Relevé Lent" value='rl'></option>
                    <option label="Renversé" value='rn'></option>
                    <option label="Reverence" value='re'></option>
                    <option label="Ronde de Corpe" value='rc'></option>
                    <option label="Ronde de Jambe" value='rj'></option>
                    <option label="Ronde Jeté" value='rt'></option>
                    <option label="Ronde de Pied" value='rp'></option>
                    <option label="Royale" value='ry'></option>
                    <option label="Sauter (Soubresaut)" value='sr'></option>
                    <option label="Sissone" value='sn'></option>
                    <option label="Soutenue" value='st'></option>
                    <option label="Soplesse" value='sp'></option>
                    <option label="Temps de Cuisse" value='tc'></option>
                    <option label="Temps de Fleche" value='tf'></option>
                    <option label="Temps Levé" value='tv'></option>
                    <option label="Temps Lié" value='tl'></option>
                    <option label="Tendú (Battement)" value='tn'></option>
                    <option label="Tombé" value='tb'></option>
                    <option label="Tour de Jambe" value='tj'></option>
                    <option label="Vals (Pas de)" value='vs'></option>
                    <option label="Tour" value='tr'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Number</div>
                <div className="block-input titles">
                  <label htmlFor="number-input"></label>

                  <input type="text" id="number-input" list="number-options" />

                  <datalist id="number-options">
                    <option label="Single/Ommited" value=''></option>
                    <option label="Double" value='2'></option>
                    <option label="Triple" value='3'></option>
                    <option label="Quadruple" value='4'></option>
                    <option label="Quintuple" value='5'></option>
                    <option label="Sixtuple" value='6'></option>
                    <option label="Seventuple" value='7'></option>
                    <option label="Eightuple" value='8'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Leg</div>
                <div className="block-input">
                  <label htmlFor="leg-form-input"></label>
                  <input type="text" id="leg-form-input" list="leg-form-options" />

                  <datalist id="leg-form-options">
                    <option label="Ommited" value=''></option>
                    <option label="Cou de Pied" value='#'></option>
                    <option label="Passé" value='$'></option>
                    <option label="Attitude" value='%'></option>
                    <option label="Etiré" value='/'></option>
                  </datalist>

                  <label htmlFor="leg-cardinal-input"></label>
                  <input type="text" id="leg-cardinal-input" list="leg-cardinal-options" />

                  <datalist id="leg-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="leg-side-input"></label>
                  <input type="text" id="leg-side-input" list="leg-side-options" />

                  <datalist id="leg-side-options">
                    <option label="Right Leg" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Direction</div>
                <div className="block-input">
                  <label htmlFor="direction-cardinal-input"></label>
                  <input type="text" id="direction-cardinal-input" list="direction-cardinal-options" />

                  <datalist id="direction-cardinal-options">
                    <option label="Ommited" value=''></option>
                    <option label="Front" value='+'></option>
                    <option label="Back" value='-'></option>
                    <option label="Side" value='='></option>
                  </datalist>

                  <label htmlFor="direction-side-input"></label>
                  <input type="text" id="direction-side-input" list="direction-side-options" />

                  <datalist id="direction-side-options">
                    <option label="Right Leg / Ommited" value=''></option>
                    <option label="Left Leg" value='!'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Spin</div>
                <div className="block-input">
                  <label htmlFor="spin-input"></label>
                  <input type="text" id="spin-input" list="spin-options" />

                  <datalist id="spin-options">
                    <option label="Ommited" value=''></option>
                    <option label="Clockwise" value='>'></option>
                    <option label="Counter-Clockwise" value='<'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3 third-line">
                <div className='titles heads'>Head</div>
                <div className="block-input">
                  <label htmlFor="head-input"></label>
                  <input type="text" id="head-input" list="head-options" />

                  <datalist id="head-options">
                    <option label="Ommited" value=''></option>
                    <option label="En Dehors Left" value='1'></option>
                    <option label="Front" value='2'></option>
                    <option label="En Dehors Right" value='3'></option>
                    <option label="Profile Right" value='4'></option>
                    <option label="En Dedans Right" value='5'></option>
                    <option label="Down" value='6'></option>
                    <option label="En Dedans Left" value='7'></option>
                    <option label="Profile Left" value='8'></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div className="L2 leftL2">
              <div className="h L3">
                <div className='titles heads'>Left Arm</div>
                <div className="block-input">
                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-position-input" list="leftarm-position-options" />

                  <datalist id="leftarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="leftarm-side-input"></label>
                  <input type="text" id="leftarm-side-input" list="leftarm-side-options" />

                  <datalist id="leftarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="leftarm-form-input"></label>
                  <input type="text" id="leftarm-form-input" list="leftarm-form-options" />

                  <datalist id="leftarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value='"'></option>
                  </datalist>
                </div>
              </div>
              <div className="h L3">
                <div className='titles heads'>Right Arm</div>
                <div className="block-input">
                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-position-input" list="rightarm-position-options" />

                  <datalist id="rightarm-position-options">
                    <option label="Ommited" value=''></option>
                    <option label="Bras Bas" value='0'></option>
                    <option label="First Position" value='1'></option>
                    <option label="Second Position" value='2'></option>
                    <option label="Fifth Position" value='3'></option>
                    <option label="Bar" value='4'></option>
                    <option label="Derriére" value='5'></option>
                    <option label="Waist" value='6'></option>
                    <option label="Chest" value='7'></option>
                    <option label="Shoulder" value='8'></option>
                    <option label="Face" value='9'></option>
                  </datalist>

                  <label htmlFor="rightarm-side-input"></label>
                  <input type="text" id="rightarm-side-input" list="rightarm-side-options" />

                  <datalist id="rightarm-side-options">
                    <option label="Ommited" value=''></option>
                    <option label="Right" value='?'></option>
                    <option label="Left" value='!'></option>
                  </datalist>

                  <label htmlFor="rightarm-form-input"></label>
                  <input type="text" id="rightarm-form-input" list="rightarm-form-options" />

                  <datalist id="rightarm-form-options">
                    <option label="Normal" value=''></option>
                    <option label="Allongé" value='°'></option>
                    <option label="w/Partenaire" value='"'></option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>
          <div className="h L1 variant-side">
            <div className="L2 variant-title heads">Variants</div>
            <div className="L2 varia">
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Demi" id="demi" value='D' /></div>
                  <div className="h">Demi</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Petit" id='petit' value='T' /></div>
                  <div className="h">Petit</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plier" id='plier' value='P' /></div>
                  <div className="h">Plier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Plat" id='plat' value='L' /></div>
                  <div className="h">Plat</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="A Térre" id='aterre' value='R' /></div>
                  <div className="h">A Térre</div>
                </div>
              </div >
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Quartier" id='quartier' value='Q' /></div>
                  <div className="h">Quartier</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Grand" id='grand' value='G' /></div>
                  <div className="h">Grand</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Etiré" id='etire' value='E' /></div>
                  <div className="h">Etiré</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Relevé" id='releve' value='V' /></div>
                  <div className="h">Relevé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En L'Air" id='enlair' value='A' /></div>
                  <div className="h">En L'Air</div>
                </div>
              </div>
              <div className="h">
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Changement" id='changement' value='C' /></div>
                  <div className="h">Changement</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Fermé" id='ferme' value='F' /></div>
                  <div className="h">Fermé</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="En Tournant" id='entournant' value='N' /></div>
                  <div className="h">En Tournant</div>
                </div>
                <div className='internal-box'>
                  <div className="h"><input type="checkbox" name="Battus" id='battus' value='B' /></div>
                  <div className="h">Battus</div>
                </div>
                <div className='button-box'>
                  <div className="h"><button onClick={handleSubmit}>Add Block</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </form>



      <div className="currentblock">

      </div>

    </div>





  )


}

export default BlockInput;