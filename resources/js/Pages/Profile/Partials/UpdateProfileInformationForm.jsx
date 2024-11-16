import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            nombre1: user.nombre1,
            nombre2: user.nombre2,
            apellido1: user.apellido1,
            apellido2: user.apellido2,
            email: user.email,
            telefono: user.telefono
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Información de perfil
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualiza la información de tu cuenta y correo electrónico.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Correo" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Nombre de usuario" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                {/* NOMBRES */}
                <div className='flex flex-row gap-4'>
                    <div>
                        <InputLabel htmlFor="nombre1" value="Primer nombre" />

                        <TextInput
                            id="nombre1"
                            className="mt-1 block w-full"
                            value={data.nombre1}
                            onChange={(e) => setData('nombre1', e.target.value)}
                            required
                            autoComplete="nombre1"
                        />

                        <InputError className="mt-2" message={errors.nombre1} />
                    </div>

                    <div>
                        <InputLabel htmlFor="nombre2" value="Segundo nombre" />

                        <TextInput
                            id="nombre2"
                            className="mt-1 block w-full"
                            value={data.nombre2}
                            onChange={(e) => setData('nombre2', e.target.value)}
                            autoComplete="nombre2"
                        />

                        <InputError className="mt-2" message={errors.nombre2} />
                    </div>
                </div>

                {/* APELLIDOS */}
                <div className='flex flex-row gap-4'>
                    <div>
                        <InputLabel htmlFor="apellido1" value="Primer apellido" />

                        <TextInput
                            id="apellido1"
                            className="mt-1 block w-full"
                            value={data.apellido1}
                            onChange={(e) => setData('apellido1', e.target.value)}
                            required
                            autoComplete="apellido1"
                        />

                        <InputError className="mt-2" message={errors.apellido1} />
                    </div>

                    <div>
                        <InputLabel htmlFor="apellido2" value="Segundo apellido" />

                        <TextInput
                            id="apellido2"
                            className="mt-1 block w-full"
                            value={data.apellido2}
                            onChange={(e) => setData('apellido2', e.target.value)}
                            autoComplete="apellido2"
                        />

                        <InputError className="mt-2" message={errors.apellido2} />
                    </div>
                </div>

                {/* TELEFONO */}
                <div>
                    <InputLabel htmlFor="telefono" value="Número de teléfono" />

                    <TextInput
                        id="telefono"
                        className="mt-1 block w-full"
                        value={data.telefono}
                        onChange={(e) => setData('telefono', e.target.value)}
                        autoComplete="telefono"
                    />

                    <InputError className="mt-2" message={errors.telefono} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Tu correo no esta verificado.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click aquí para verificar correo.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Un nuevo link de verificación ha sido enviado a tu correo
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Guardado.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
