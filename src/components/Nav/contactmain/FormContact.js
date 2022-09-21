import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./formcontact.css";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<div className='container-form'>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Escribe tu nombre..."
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@gmail.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field name="pais" as="select">
								<option value="mexico">Mexico</option>
								<option value="Chile">Chile</option>
								<option value="Argentina">Argentina</option>
                <option value="Otro">Otro</option>
              </Field>
						</div>

						<div>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Formulario;