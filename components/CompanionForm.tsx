"use client"
import { Select,       //mark for me :: this is tricky to me i need to more practice of form creation in nextjs
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue, } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { subjects } from "@/constants"
import { Textarea } from "@/components/ui/textarea"
const formSchema = z.object({
  username: z.string().min(1,{message : 'Companion name is required'}),
  subject: z.string().min(1,{message : 'subject is required'}),
  topic: z.string().min(1,{message : 'topic is required'}),
  voice: z.string().min(1,{message : 'voice is required'}),
  style: z.string().min(1,{message : 'style is required'}),
  duration: z.coerce.number().min(1,{message : 'duration is required'}),
})





export default function CompanionForm1() {


const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:'',
      subject: '',
      topic: '',
      voice: '',
      style: '',
      duration: 15,
    },
  })

  const onSubmit=(values: z.infer<typeof formSchema>)=> {
    console.log(values);
    
  }

  return (
      
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Companion name" {...field} className="input"/>
      
      
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem> 
              <FormLabel>Subject</FormLabel>
              <FormControl>
               <Select
               onValueChange={field.onChange}
               value={field.value}
               defaultValue={field.value}>
                <SelectTrigger className="input capitalize">
                  <SelectValue placeholder="Select your subject"/>

                </SelectTrigger>

   <SelectContent>

    

{subjects.map((subject) => (
      <SelectItem 
      value={subject}
      key={subject}
      className="capitalize">
        {subject}
      </SelectItem>
    ))}


   </SelectContent>



               </Select>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter More deatils about the Topic" {...field} className="input"/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />




        {/* <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>duration</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name." {...field} className="input"/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        /> */}


        {/* <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>duration</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name." {...field} className="input"/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        /> */}
           <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the voice"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input">
                                        <SelectValue
                                            placeholder="Select the style"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">
                                            Formal
                                        </SelectItem>
                                        <SelectItem value="casual">
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

         <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutes</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />








        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}



