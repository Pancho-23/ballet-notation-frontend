
function BlockInput() {



  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the selected values directly from the input

    const placeInput = document.getElementById('place-input').value;
    const hipInput = document.getElementById('hip-input').value;
    const feetPositionInput = document.getElementById('feet-position-input').value;
    const feetOrderInput = document.getElementById('feet-order-input').value;
    const feetOpenCloseInput = document.getElementById('feet-openClose-options').value;
    const stepInput = document.getElementById('step-input').value;
    const numberInput = document.getElementById('number-input').value;
    const legFormInput = document.getElementById('leg-form-input').value;
    const legCardinalInput = document.getElementById('leg-cardinal-input').value;
    const legSideInput = document.getElementById('leg-side-input').value;
    const directionCardinalInput = document.getElementById('direction-cardinal-input').value;
    const directionSideInput = document.getElementById('direction-side-input').value;
    const spinInput = document.getElementById('spin-input').value;
    const leftArmPositionInput = document.getElementById('leftarm-position-input').value;
    const leftArmSideInput = document.getElementById('leftarm-side-input').value;
    const leftArmFormInput = document.getElementById('leftarm-form-input').value;
    const rightArmPositionInput = document.getElementById('rightarm-position-input').value;
    const rightArmSideInput = document.getElementById('rightarm-side-input').value;
    const rightArmFormInput = document.getElementById('rightarm-form-input').value;
    const headInput = document.getElementById('head-input').value;


    const variantInput = '';

    if (document.getElementById('demi').checked === true) {
      variantInput += 'D'
    }
    if (document.getElementById('ferme').checked === true) {
      variantInput += 'F'
    }
    if (document.getElementById('petit').checked === true) {
      variantInput += 'T'
    }
    if (document.getElementById('grand').checked === true) {
      variantInput += 'G'
    }
    if (document.getElementById('quartier').checked === true) {
      variantInput += 'Q'
    }
    if (document.getElementById('plat').checked === true) {
      variantInput += 'L'
    }
    if (document.getElementById('releve').checked === true) {
      variantInput += 'V'
    }
    if (document.getElementById('battus').checked === true) {
      variantInput += 'B'
    }
    if (document.getElementById('changement').checked === true) {
      variantInput += 'C'
    }
    if (document.getElementById('entournant').checked === true) {
      variantInput += 'N'
    }
    if (document.getElementById('plier').checked === true) {
      variantInput += 'P'
    }
    if (document.getElementById('etire').checked === true) {
      variantInput += 'E'
    }
    if (document.getElementById('aterre').checked === true) {
      variantInput += 'T'
    }
    if (document.getElementById('enlair').checked === true) {
      variantInput += 'A'
    }

    const finalBlock = placeInput + hipInput + feetPositionInput + feetOrderInput + feetOpenCloseInput + variantInput + stepInput + numberInput + legFormInput + legCardinalInput + legSideInput + directionCardinalInput + directionSideInput + spinInput + leftArmPositionInput + leftArmSideInput + leftArmFormInput + rightArmPositionInput + rightArmSideInput + rightArmFormInput + headInput;

  }

  return (

    <div className="block-container">

      <form>

        {/* Start: Place Input */}
        <div className="place block-box" id="place-container">
          <div className="block-header">Place</div>
          <div className="block-input">

            <label htmlFor="place-input"></label>
            <input type="text" id="place-input" list="place-options" />

            <datalist id="place-options">
              <option label="Ommited" value='' selected></option>
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
        {/* End: Place Input */}


        {/* Start: Hip Input */}
        <div className="hip block-box block-box" id="hip-container">
          <div className="block-header">Hip</div>
          <div className="block-input">

            <label htmlFor="hip-input"></label>
            <input type="text" id="hip-input" list="hip-options" />

            <datalist id="hip-options">
              <option label="Ommited" value='' selected></option>
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
        {/* End: Hip Input */}

        {/* Start: Feet Input */}
        <div className="feet block-box" id="feet-container">
          <div className="block-header">Feet</div>
          <div className="block-input">
            <label htmlFor="feet-position-input"></label>
            <input type="text" id="feet-position-input" list="feet-position-options" />

            <datalist id="feet-position-options">
              <option label="Ommited" value='' selected></option>
              <option label="First Position" value='1'></option>
              <option label="Second Position" value='2'></option>
              <option label="Third Position" value='3'></option>
              <option label="Fourth Position" value='4'></option>
              <option label="Fifth Position" value='5'></option>
            </datalist>

            <label htmlFor="feet-order-input"></label>
            <input type="text" id="feet-order-input" list="feet-order-options" />

            <datalist id="feet-order-options">
              <option label="Ommited" value='' selected></option>
              <option label="Right Foot Front" value='+'></option>
              <option label="Right Foot Back" value='-'></option>
              <option label="Symmetric" value='='></option>
            </datalist>

            <label htmlFor="feet-openClose-input"></label>
            <input type="text" id="feet-openClose-input" list="feet-openClose-options" />

            <datalist id="feet-openClose-options">
              <option label="Opened Position (Usual)" value='' selected></option>
              <option label="Closed Position" value='¬'></option>
            </datalist>

          </div>
        </div>
        {/* End: Feet Input */}

        {/* Start: Variants Input */}
        <div className="variants block-box" id="variants-container">
          <div className="block-header">Variants</div>
          <div className="block-input variants-checkboxes">

            <div className="check">
              <input type="checkbox" name="Demi" id="demi" value='D' />
              <div className="check-tag">
                Demi
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Fermé" id='ferme' value='F' />
              <div className="check-tag">
                Fermé
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Petit" id='petit' value='T' />
              <div className="check-tag">
                Petit
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Grand" id='grand' value='G' />
              <div className="check-tag">
                Grand
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Quartier" id='quartier' value='Q' />
              <div className="check-tag">
                Quartier
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Plat" id='plat' value='L' />
              <div className="check-tag">
                Plat
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Relevé" id='releve' value='V' />
              <div className="check-tag">
                Relevé
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Battus" id='battus' value='B' />
              <div className="check-tag">
                Battus
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Changement" id='changement' value='C' />
              <div className="check-tag">
                Changement
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="En Tournant" id='entournant' value='N' />
              <div className="check-tag">
                En Tournant
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Plier" id='plier' value='P' />
              <div className="check-tag">
                Plier
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="Etiré" id='etire' value='E' />
              <div className="check-tag">
                Etiré
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="A Térre" id='aterre' value='R' />
              <div className="check-tag">
                A Térre
              </div>
            </div>
            <div className="check">
              <input type="checkbox" name="En L'Air" id='enlair' value='A' />
              <div className="check-tag">
                En L'Air
              </div>
            </div>


          </div>

        </div>
        {/* End: Variants Input */}

        {/* Start: Step Input / PENDING */}
        <div className="step block-box" id="step-container">
          <div className="block-header">Step</div>
          <div className="block-input">

            <label htmlFor="step-input"></label>
            <input type="text" id="step-input" list="step-options" />

            <datalist id="step-options">
              <option label="Ommited" value='' selected></option>
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
        {/* End: Step Input */}

        {/* Start: Number Input */}
        <div className="number block-box" id="number-container">
          <div className="block-header">Number</div>
          <div className="block-input">
            <label htmlFor="number-input"></label>

            <input type="text" id="number-input" list="number-options" />

            <datalist id="number-options">
              <option label="Single/Ommited" value='' selected></option>
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
        {/* End: Number Input */}

        {/* Start: Leg Input */}
        <div className="leg block-box" id="leg-container">
          <div className="block-header">Leg</div>
          <div className="block-input">
            <label htmlFor="leg-form-input"></label>
            <input type="text" id="leg-form-input" list="leg-form-options" />

            <datalist id="leg-form-options">
              <option label="Ommited" value='' selected></option>
              <option label="Cou de Pied" value='#'></option>
              <option label="Passé" value='$'></option>
              <option label="Attitude" value='%'></option>
              <option label="Etiré" value='/'></option>
            </datalist>

            <label htmlFor="leg-cardinal-input"></label>
            <input type="text" id="leg-cardinal-input" list="leg-cardinal-options" />

            <datalist id="leg-cardinal-options">
              <option label="Ommited" value='' selected></option>
              <option label="Front" value='+'></option>
              <option label="Back" value='-'></option>
              <option label="Side" value='='></option>
            </datalist>

            <label htmlFor="leg-side-input"></label>
            <input type="text" id="leg-side-input" list="leg-side-options" />

            <datalist id="leg-side-options">
              <option label="Right Leg" value='' selected></option>
              <option label="Left Leg" value='!'></option>
            </datalist>

          </div>
        </div>
        {/* End: Leg Input */}

        {/* Start: Direction Input */}
        <div className="direction block-box" id="direction-container">
          <div className="block-header">Direction</div>
          <div className="block-input">

            <label htmlFor="direction-cardinal-input"></label>
            <input type="text" id="direction-cardinal-input" list="direction-cardinal-options" />

            <datalist id="direction-cardinal-options">
              <option label="Ommited" value='' selected></option>
              <option label="Front" value='+'></option>
              <option label="Back" value='-'></option>
              <option label="Side" value='='></option>
            </datalist>

            <label htmlFor="direction-side-input"></label>
            <input type="text" id="direction-side-input" list="direction-side-options" />

            <datalist id="direction-side-options">
              <option label="Right Leg / Ommited" value='' selected></option>
              <option label="Left Leg" value='!'></option>
            </datalist>

          </div>
        </div>
        {/* End: Direction Input */}

        {/* Start: Spin Input */}
        <div className="spin block-box" id="spin-container">
          <div className="block-header">Spin</div>
          <div className="block-input">

            <label htmlFor="spin-input"></label>
            <input type="text" id="spin-input" list="spin-options" />

            <datalist id="spin-options">
              <option label="Ommited" value='' selected></option>
              <option label="Clockwise" value='>'></option>
              <option label="Counter-Clockwise" value='<'></option>
            </datalist>

          </div>
        </div>
        {/* End: Spin Input */}

        {/* Start: Left Arm Input */}
        <div className="leftarm block-box" id="leftarm-container">
          <div className="block-header">Left Arm</div>
          <div className="block-input">

            <label htmlFor="leftarm-form-input"></label>
            <input type="text" id="leftarm-position-input" list="leftarm-position-options" />

            <datalist id="leftarm-position-options">
              <option label="Ommited" value='' selected></option>
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
              <option label="Ommited" value='' selected></option>
              <option label="Right" value='?'></option>
              <option label="Left" value='!'></option>
            </datalist>

            <label htmlFor="leftarm-form-input"></label>
            <input type="text" id="leftarm-form-input" list="leftarm-form-options" />

            <datalist id="leftarm-form-options">
              <option label="Normal" value='' selected></option>
              <option label="Allongé" value='°'></option>
              <option label="w/Partenaire" value='"'></option>
            </datalist>

          </div>
        </div>
        {/* End: Left Arm Input */}

        {/* Start: Right Arm Input */}
        <div className="rightarm block-box" id="rightarm-container">
          <div className="block-header">Right Arm</div>
          <div className="block-input">

            <label htmlFor="rightarm-form-input"></label>
            <input type="text" id="rightarm-position-input" list="rightarm-position-options" />

            <datalist id="rightarm-position-options">
              <option label="Ommited" value='' selected></option>
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
              <option label="Ommited" value='' selected></option>
              <option label="Right" value='?'></option>
              <option label="Left" value='!'></option>
            </datalist>

            <label htmlFor="rightarm-form-input"></label>
            <input type="text" id="rightarm-form-input" list="rightarm-form-options" />

            <datalist id="rightarm-form-options">
              <option label="Normal" value='' selected></option>
              <option label="Allongé" value='°'></option>
              <option label="w/Partenaire" value='"'></option>
            </datalist>

          </div>
        </div>
        {/* End: Right Arm Input */}

        {/* Start: Head Input */}
        <div className="head block-box" id="head-container">
          <div className="block-header">Head</div>
          <div className="block-input">

            <label htmlFor="head-input"></label>
            <input type="text" id="head-input" list="head-options" />

            <datalist id="head-options">
              <option label="Ommited" value='' selected></option>
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
        {/* End: Head Input */}

        {/* Button to Add the Block to the file */}

      </form>

      <button onSubmit={handleSubmit}>Add Block</button>

    </div>

  )


}

export default BlockInput;