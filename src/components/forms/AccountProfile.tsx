'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

import { UserValidation } from '@/lib/validations/user'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface Props {
  user: {
    id: string
    objectId: string
    username: string
    name: string
    bio: string
    image: string
  }
  btnTitle: string
}

const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void) => {
  e.preventDefault()
}

function onSubmit(values: z.infer<typeof UserValidation>) {
  console.log(values)
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : '',
      name: user?.name ? user.name : '',
      username: user?.username ? user.username : '',
      bio: user?.bio ? user.bio : '',
    },
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="bg-dark-4 !important; flex h-24 w-24 items-center justify-center rounded-full">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile_icon"
                    priority
                    height={64}
                    width={96}
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src="/assets/profile.svg"
                    alt="profile_icon"
                    width={24}
                    height={16}
                    className=" rounded-full object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-lg font-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  className="file:text-blue cursor-pointer border-gray-500 outline-none"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-lg font-semibold text-slate-800">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="no-focus border border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-lg font-semibold text-slate-800">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="no-focus border border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-lg font-semibold text-slate-800">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="no-focus border border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-blue-800">
          {btnTitle}
        </Button>
      </form>
    </Form>
  )
}

export default AccountProfile
