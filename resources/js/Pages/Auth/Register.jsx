import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nombre1: '',
        nombre2: '',
        apellido1: '',
        apellido2: '',
        email: '',
        password: '',
        password_confirmation: '',
        telefono: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>

                {/* TODO NOMBRES */}
                <div className='flex flex-row gap-8'>
                    <div>
                        <InputLabel htmlFor="nombre1" value="Primer nombre" />

                        <TextInput
                            id="nombre1"
                            name="nombre1"
                            value={data.nombre1}
                            className="mt-1 block w-full"
                            autoComplete="nombre1"
                            isFocused={true}
                            onChange={(e) => setData('nombre1', e.target.value)}
                            required
                        />

                        <InputError message={errors.nombre1} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="nombre2" value="Segundo nombre" />

                        <TextInput
                            id="nombre2"
                            name="nombre2"
                            value={data.nombre2}
                            className="mt-1 block w-full"
                            autoComplete="nombre2"
                            isFocused={true}
                            onChange={(e) => setData('nombre2', e.target.value)}
                        />

                        <InputError message={errors.nombre2} className="mt-2" />
                    </div>
                </div>

                {/* TODO APELLIDOS */}
                <div className='flex flex-row mt-4 gap-8'>
                    <div>
                        <InputLabel htmlFor="apellido1" value="Primer apellido" />

                        <TextInput
                            id="apellido1"
                            name="apellido1"
                            value={data.apellido1}
                            className="mt-1 block w-full"
                            autoComplete="apellido1"
                            isFocused={true}
                            onChange={(e) => setData('apellido1', e.target.value)}
                            required
                        />

                        <InputError message={errors.nombre1} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="apellido2" value="Segundo apellido" />

                        <TextInput
                            id="apellido2"
                            name="apellido2"
                            value={data.apellido2}
                            className="mt-1 block w-full"
                            autoComplete="apellido2"
                            isFocused={true}
                            onChange={(e) => setData('apellido2', e.target.value)}
                        />

                        <InputError message={errors.apellido2} className="mt-2" />
                    </div>
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="name" value="Nombre de usuario" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Correo" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* TODO TELEFONO */}
                <div className='mt-4'>
                    <InputLabel htmlFor="telefono" value="Número de teléfono" />

                    <TextInput
                        id="telefono"
                        name="telefono"
                        value={data.telefono}
                        className="mt-1 block w-full"
                        autoComplete="telefono"
                        isFocused={true}
                        onChange={(e) => setData('telefono', e.target.value)}
                        required
                    />

                    <InputError message={errors.telefono} className="mt-2" />
                </div>

                {/* CONTRASEÑA */}
                <div className='flex flex-row mt-4 gap-8'>
                    <div>
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirmar contraseña"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        ¿Ya estás registrado?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Regisitrarse
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
